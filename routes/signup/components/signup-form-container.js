import { h, Component } from 'preact';

import { SignupForm } from './signup-form';

class SignupFormContainer extends Component { 
   constructor (props) {
      super(props);
      this._handleLogin = this._handleLogin.bind(this);
      this._handleEmailChange = this._handleEmailChange.bind(this);
      this._handlePasswordChange = this._handlePasswordChange.bind(this);
      this._toggleShowPassword = this._toggleShowPassword.bind(this);
      this.state = {
         email: '',
         password: '',
         showPassword: false,
         serverError: '',
         showServerError: false
      };
   }

   _toggleShowPassword () {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
   }

   _handleLogin () {
   }

   _handleEmailChange (e) {
      this.setState({ email: e.target.value });
   }

   _handlePasswordChange (e) {
      this.setState({ password: e.target.value });
   }

   render () {
      return (
         <SignupForm 

            serverError={ this.state.serverError }
            showServerError={ this.state.showServerError }

            email={ this.state.email }
            handleEmailChange={ this._handleEmailChange }

            password={ this.state.password }
            handlePasswordChange={ this._handlePasswordChange }

            toggleShowPassword={ this._toggleShowPassword }
            showPassword={ this.state.showPassword }

         />
      )
   }
}

export { SignupFormContainer };
