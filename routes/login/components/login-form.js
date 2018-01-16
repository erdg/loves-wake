import { Component } from 'preact';
import classNames from 'classnames';

import { EmailInput, PasswordInput } from './login-form-inputs';
import { Dialog } from '../../../components/dialog';
import { Toast } from '../../../components/toast';

class LoginForm extends Component {

   render (props) {

      let loginBtnClasses = classNames(
         'btn', 
         'btn-primary',
         {
            'loading': props.loading
         }
      );

      let recoverBtnClasses = classNames(
         'btn',
         'btn-link',
         'float-right',
         {
            'loading': props.loading
         }
      );

      return (
         <div class="form-group m-2">

            <h1>Login</h1>

            <Toast error active={props.showServerError}>
               {props.serverError}
            </Toast>

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

            <div class="row">
               <button 
                  class={ loginBtnClasses }
                  onClick={ props.handleLogin }
               >
                  Login
               </button>
               <button 
                  class={ recoverBtnClasses }
                  onClick={ props.handleRecoverAccount }
               >
                  Recover account
               </button>

            </div>

         </div>
      )
   }
}

export { LoginForm };
