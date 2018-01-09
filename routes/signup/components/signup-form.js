import { Component } from 'preact';
import classNames from 'classnames';

import { EmailInput, PasswordInput } from './signup-form-inputs';
import { Dialog } from '../../../components/dialog';

class SignupForm extends Component {
   render (props) {
       let btnClasses = classNames(
         'btn', 
         'btn-primary',
         {
            'loading': props.loading
         }
      );
      return (
         <div class="form-group m-2">

            <h1>Signup</h1>

            <EmailInput 
               email={props.email}
               handleEmailChange={props.handleEmailChange}
            />

            <PasswordInput 
               password={props.password}
               handlePasswordChange={props.handlePasswordChange}
               toggleShowPassword={ props.toggleShowPassword }
               showPassword={ props.showPassword }
            />

            <button 
               class={ btnClasses }
               onClick={ props.handleSignup }
            >
               Create account
            </button>

         </div>
      )
   }
}

export { SignupForm };
