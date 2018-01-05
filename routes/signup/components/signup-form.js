import { Component } from 'preact';

import { EmailInput, PasswordInput } from './signup-form-inputs';
import { Dialog } from '../../../components/dialog';

class SignupForm extends Component {
   render (props) {
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

            <button class="btn btn-primary">
               Create account
            </button>

         </div>
      )
   }
}

export { SignupForm };
