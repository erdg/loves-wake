import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { ConfirmAccountFormContainer } from './components/confirm-account-form-container';

class ConfirmAccount extends Component {
   render (props) {
      return (
         <FlexContainer 
            formRail={ 
               <ConfirmAccountFormContainer 
                  email={ props.email }
                  handleLoginSuccess={ (user, token) => props.handleLoginSuccess(user, token) }
               /> 
            } 
         />
      );
   }
}

export default ConfirmAccount;

