import { Component } from 'preact';
import classNames from 'classnames';

import { PasswordInput } from '../../../components/form-inputs';
import { Dialog } from '../../../components/dialog';
import { Toast } from '../../../components/toast';

class ResetPasswordForm extends Component {

   render (props) {

      let formClasses = classNames(
         'form-group', { 'has-error': props.formError }
      );

      // hide error hint if not needed
      let hintClasses = classNames(
         'form-input-hint', { 'd-hide': !props.formError }
      );

      let btnClasses = classNames(
         'btn', 'btn-primary', { 'loading': props.loading }
      );

      return (
         <div class={ formClasses }>

            <h1>Reset Account Password</h1>

            <Toast error active={props.showServerError}>
               {props.serverError}
            </Toast>

            <PasswordInput 
               value={ props.password }
               onChange={ props.handlePasswordChange }
            />

            <PasswordInput 
               label="Confirm Password"
               value={ props.password2 }
               onChange={ props.handlePassword2Change }
            />

            <p class={ hintClasses }>
               Passwords do not match
            </p>

            <button 
               class={ btnClasses }
               onClick={ props.handleResetPassword }
            >
               Reset password
            </button>

         </div>
      )
   }
}

export { ResetPasswordForm };
