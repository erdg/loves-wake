import { h, Component } from 'preact';
import { route } from 'preact-router';
import isEmail from 'validator/lib/isEmail';

import { LoginForm } from './login-form';


class LoginFormContainer extends Component { 
   constructor (props) {
      super(props);
      // this._handleLogin = this._handleLogin.bind(this);
      this._handleEmailChange = this._handleEmailChange.bind(this);
      this._handlePasswordChange = this._handlePasswordChange.bind(this);
      this._toggleShowPassword = this._toggleShowPassword.bind(this);
      this.state = {
         email: '',
         emailError: false,
         password: '',
         passwordError: false,
         showPassword: false,
         serverError: '',
         showServerError: false,
         loginBtnLoading: false,
         recoverBtnLoading: false,
         loginSuccess: false,
         recoverAccountSuccess:false
      };
   }

   _toggleShowPassword () {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
   }

   _handleLogin = () => {
      // if not valid email address
      if ( !(isEmail(this.state.email)) ) {
         // throw email error, don't submit
         this.setState({ emailError: true });
         return
      } else {
         this.setState({ emailError: false });
      }

      // make sure there's a password
      if (!this.state.password) {
         this.setState({ passwordError: true });
         return
      } else { 
         this.setState({ passwordError: false }); 
      }

      // loading spinner on button
      this.setState({ loginBtnLoading: true });

      fetch("https://erikdgustafson.com/api/!loginUser?"
         + this.state.email
         + "&"
         + this.state.password
      )
      .then( (resp) => {
         return resp.json();
      })
      .then( (json) => {
         if (json.error) {
            this.setState({ 
               // display errors and remove loading spinner
               serverError: json.error, 
               showServerError: true,
               loginBtnLoading: false
            });

         } else if (json.token) {
            // remove loading spinner
            // set loginSuccess flag to true to trigger route change to 'Profile'
            // FIXME - the above feels like a hack. 
            // might be time to add a redux-style store?
            this.setState({ loginBtnLoading: false, loginSuccess: true});
            // send event up to set global app state with logged in user
            this.props.handleLoginSuccess(json.user, json.token);
         }
      })
      .then( () => {
         if (this.state.loginSuccess) {
            route('/profile', true);
         }
      });

      // clear password
      this.setState({ password: '' });

   }

   _handleRecoverAccount = () => {
      // loading spinner on button
      this.setState({ recoverBtnLoading: true });

      fetch("https://erikdgustafson.com/api/!recoverUserAccount?"
         + this.state.email
      )
      .then( (resp) => {
         return resp.json();
      })
      .then( (json) => {
         if (json.error) {
            this.setState({ 
               // display errors and remove loading spinner
               serverError: json.error, 
               showServerError: true,
               recoverBtnLoading: false
            });

         } else if (json.email) {
            // remove loading spinner
            // set loginSuccess flag to true to trigger route change to 'Profile'
            // FIXME - the above feels like a hack. 
            // might be time to add a redux-style store?
            this.setState({ recoverBtnLoading: false, recoverAccountSuccess: true});
            // send event up to set global app state with logged in user
            this.props.handleRecoverAccountSuccess(json.email);
         }
      })
      .then( () => {
         if (this.state.recoverAccountSuccess) {
            route('/recover-account', true);
         }
      });

   }

   _handleEmailChange (e) {
      this.setState({ email: e.target.value });
   }

   _handlePasswordChange (e) {
      this.setState({ password: e.target.value });
   }

   render () {
      return (
         <LoginForm 

            serverError={ this.state.serverError }
            showServerError={ this.state.showServerError }

            email={ this.state.email }
            emailError={ this.state.emailError }
            handleEmailChange={ this._handleEmailChange }

            password={ this.state.password }
            passwordError={ this.state.passwordError }
            handlePasswordChange={ this._handlePasswordChange }

            toggleShowPassword={ this._toggleShowPassword }
            showPassword={ this.state.showPassword }

            handleLogin={ this._handleLogin }

            loginBtnLoading={ this.state.loginBtnLoading }
            recoverBtnLoading={ this.state.recoverBtnLoading }

            handleRecoverAccount={ this._handleRecoverAccount }

         />
      )
   }
}

export { LoginFormContainer };
