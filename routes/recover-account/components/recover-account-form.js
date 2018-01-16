import { Component } from 'preact';
import classNames from 'classnames';

import { TextInput } from '../../../components/form-inputs/'
import { Toast } from '../../../components/toast';

class RecoverAccountForm extends Component {
   render (props) {
      let formClasses = classNames(
         'form-group',
         {
            'has-error': props.hasError
         }
      );
      let btnClasses = classNames(
         'btn', 'btn-primary', 'centered', 'mt-2',
         {
            'loading': props.loading
         }
      );
      return (
         <div class={formClasses}>

            <h1 class="text-center">Confirm Account</h1>

            <i class="icon icon-3x icon-mail" style="width: 100%;margin: 0 auto;"/>

            <p class="text-center">
               We sent you an email. Please enter the six-digit
               number below to confirm your account.
            </p>


            <Toast error active={props.showServerError}>
               {props.serverError}
            </Toast>

            <TextInput 
               value={ props.recoverAccountNumber }
               onChange={ props.handleRecoverAccountNumberChange }
            />

            <p class="form-input-hint">
               Please enter a six-digit number
            </p>

            <button 
               class={ btnClasses }
               onClick={ props.handleRecoverAccount }
            >
               Confirm Account
            </button>

         </div>
      )
   }
}

export { RecoverAccountForm };
