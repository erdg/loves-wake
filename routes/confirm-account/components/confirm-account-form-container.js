import { Component } from 'preact';
import { route } from 'preact-router';

import { ConfirmAccountForm } from './confirm-account-form';

class ConfirmAccountFormContainer extends Component { 
   constructor (props) {
      super(props);

      this._handleConfirmationNumberChange = this._handleConfirmationNumberChange.bind(this);
      this._handleConfirmAccount = this._handleConfirmAccount.bind(this);

      this.state = {
         confirmationNumber: '',
         serverError: '',
         showServerError: false,
         confirmAccountSuccess: false,
         loading: false
      };
   }

   _handleConfirmationNumberChange (e) {
      this.setState({ confirmationNumber: e.target.value });
   }

   _handleConfirmAccount () {
      this.setState({ loading: true });

      fetch("https://erikdgustafson.com/api/!confirmUser?"
         + this.props.email
         + "&+"
         + this.state.confirmationNumber,
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

         } else if (json.token) {
            // remove loading spinner
            // set loginSuccess flag to true to trigger route change to 'Profile'
            // FIXME - the above feels like a hack. 
            // might be time to add a redux-style store?
            this.setState({ loading: false, confirmAccountSuccess: true});
            // send event up to set global app state with logged in user
            this.props.handleLoginSuccess(json.user, json.token);
         }
      })
      .then( () => {
         if (this.state.confirmAccountSuccess) {
            route('/profile', true);
         }
      });
   }


   // TODO - hasError below should be a method called as...
   //
   // hasError={ this._hasError(this.state.confirmationNumber) }
   // 
   // ...or something like that.

   render (props) {
      return (
         <ConfirmAccountForm

            confirmationNumber={ this.state.confirmationNumber }
            handleConfirmationNumberChange={ this._handleConfirmationNumberChange }

            hasError={ 
               this.state.confirmationNumber 
                  && 
               (isNaN(this.state.confirmationNumber) 
                  || 
               !(this.state.confirmationNumber.length === 6)) 
                  ? true : false
            }

            serverError={ this.state.serverError }
            showServerError={ this.state.showServerError }

            loading={ this.state.loading }
            handleConfirmAccount={ this._handleConfirmAccount }

         />
      )
   }
}

export { ConfirmAccountFormContainer };
