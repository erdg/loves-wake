import { h, Component } from 'preact';

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
         loading: false
      };
   }

   _toggleShowPassword () {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
   }

   _handleLogin = () => {
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
               serverError: json.error, 
               showServerError: true,
               loading: false
            });

         } else if (json.token) {
            alert("User logged in with token: " + json.token);
         }
      });

      this.setState({ email: '', password: '' });

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

         />
      )
   }
}

export { LoginFormContainer };
