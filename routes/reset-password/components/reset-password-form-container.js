import { h, Component } from 'preact';
import { route } from 'preact-router';

import { ResetPasswordForm } from './reset-password-form';

class ResetPasswordFormContainer extends Component { 
   constructor (props) {
      super(props);
      this.state = {
         password: '',
         password2: '',
         formError: false,
         serverError: '',
         showServerError: false,
         loading: false
      };
   }

   _handleResetPassword = () => {
      // make sure passwords match, throw form error if not
      if (!(this.state.password === this.state.password2)) {
         this.setState({ formError: true });
         return
      }

      if (this.state.formError) {
         this.setState({ formError: false });
      }

      // loading spinner on button
      this.setState({ loading: true });

      fetch("https://erikdgustafson.com/api/!resetUserPassword?"
         + this.props.email
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
            this.setState({ loading: false, resetPasswordSuccess: true});
            // send event up to set global app state with logged in user
            this.props.handleResetPasswordSuccess(json.user, json.token);
         }
      })
      .then( () => {
         if (this.state.resetPasswordSuccess) {
            route('/profile', true);
         }
      });

   }

   _handlePasswordChange = (e) => {
      this.setState({ password: e.target.value });
   }

   _handlePassword2Change = (e) => {
      this.setState({ password2: e.target.value });
   }


   render () {
      return (
         <ResetPasswordForm 

            serverError={ this.state.serverError }
            showServerError={ this.state.showServerError }
            
            formError={ this.state.formError }

            password={ this.state.password }
            password2={ this.state.password2 }
            handlePasswordChange={ this._handlePasswordChange }
            handlePassword2Change={ this._handlePassword2Change }

            handleResetPassword={ this._handleResetPassword }

            loading={ this.state.loading }

         />
      )
   }
}

export { ResetPasswordFormContainer };
