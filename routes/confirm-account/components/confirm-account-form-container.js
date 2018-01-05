import { Component } from 'preact';

import { ConfirmAccountForm } from './confirm-account-form';

class ConfirmAccountFormContainer extends Component { 
   constructor (props) {
      super(props);

      this._handleConfirmationNumberChange = this._handleConfirmationNumberChange.bind(this);

      this.state = {
         confirmationNumber: '',
         serverError: '',
         showServerError: false
      };
   }

   _handleConfirmationNumberChange (e) {
      this.setState({ confirmationNumber: e.target.value });
   }

   // TODO - hasError below should be a method called as...
   //
   // hasError={ this._hasError(this.state.confirmationNumber) }
   // 
   // ...or something like that.

   render () {
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

         />
      )
   }
}

export { ConfirmAccountFormContainer };
