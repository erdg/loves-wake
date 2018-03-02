import { Component } from 'preact';
import { route } from 'preact-router';

import { RecoverAccountForm } from './recover-account-form';

class RecoverAccountFormContainer extends Component {
   constructor (props) {
      super(props);

      this.state = {
         recoverAccountNumber: '',
         serverError: '',
         showServerError: false,
         canResetPassword: false,
         loading: false
      };
   }

   _handleRecoverAccountNumberChange = (e) => {
      this.setState({ recoverAccountNumber: e.target.value });
   }

   _handleRecoverAccount = () => {
      this.setState({ loading: true });

      fetch("https://erikdgustafson.com/api/!confirmRecoverAccountNumber?"
         + this.props.email
         + "&+"
         + this.state.recoverAccountNumber,
         { method: "POST" }
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

         } else if (json.canResetPassword) {
            // remove loading spinner
            // set recoverAccountSuccess flag to true to trigger route change to 'ResetPassword'
            // FIXME - the above feels like a hack.
            // might be time to add a redux-style store?
            this.setState({ loading: false, canResetPassword: json.canResetPassword});
            // send event up to set global app state with logged in user
         }
      })
      .then( () => {
         if (this.state.canResetPassword) {
            route('/reset-password', true);
         }
      });
   }


   // TODO - hasError below should be a method called as...
   //
   // hasError={ this._hasError(this.state.recoverAccountNumber) }
   //
   // ...or something like that.

   render (props) {
      return (
         <RecoverAccountForm

            recoverAccountNumber={ this.state.recoverAccountNumber }
            handleRecoverAccountNumberChange={ this._handleRecoverAccountNumberChange }

            hasError={
               this.state.recoverAccountNumber
                  &&
               (isNaN(this.state.recoverAccountNumber)
                  ||
               !(this.state.recoverAccountNumber.length === 6))
                  ? true : false
            }

            serverError={ this.state.serverError }
            showServerError={ this.state.showServerError }

            loading={ this.state.loading }
            handleRecoverAccount={ this._handleRecoverAccount }

         />
      )
   }
}

export { RecoverAccountFormContainer };
