import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { ResetPasswordFormContainer } from './components/reset-password-form-container';

class ResetPassword extends Component {
   render (props) {
      return (
         <FlexContainer 
            formRail={ 
               <ResetPasswordFormContainer 
                  email={ props.email }
                  handleResetPasswordSuccess={ (user, token) => props.handleResetPasswordSuccess(user, token) }
               /> 
            } 
         />
      );
   }
}

export default ResetPassword;

