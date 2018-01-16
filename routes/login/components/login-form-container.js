import { h, Component } from 'preact';
import { route } from 'preact-router';

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
         password: '',
         showPassword: false,
         serverError: '',
         showServerError: false,
         loading: false,
         loginSuccess: false,
         recoverAccountSuccess:false
      };
   }

   _toggleShowPassword () {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
   }

   _handleLogin = () => {
      // loading spinner on button
      this.setState({ loading: true });

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
               loading: false
            });

         } else if (json.token) {
            // remove loading spinner
            // set loginSuccess flag to true to trigger route change to 'Profile'
            // FIXME - the above feels like a hack. 
            // might be time to add a redux-style store?
            this.setState({ loading: false, loginSuccess: true});
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
      this.setState({ loading: true });

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
               loading: false
            });

         } else if (json.email) {
            // remove loading spinner
            // set loginSuccess flag to true to trigger route change to 'Profile'
            // FIXME - the above feels like a hack. 
            // might be time to add a redux-style store?
            this.setState({ loading: false, recoverAccountSuccess: true});
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
            handleEmailChange={ this._handleEmailChange }

            password={ this.state.password }
            handlePasswordChange={ this._handlePasswordChange }

            toggleShowPassword={ this._toggleShowPassword }
            showPassword={ this.state.showPassword }

            handleLogin={ this._handleLogin }

            loading={ this.state.loading }

            handleRecoverAccount={ this._handleRecoverAccount }

         />
      )
   }
}

export { LoginFormContainer };
