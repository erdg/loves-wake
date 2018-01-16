import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { RecoverAccountFormContainer } from './components/recover-account-form-container';

class RecoverAccount extends Component {
   render (props) {
      return (
         <FlexContainer 
            formRail={ 
               <RecoverAccountFormContainer 
                  email={ props.email }
                  handleRecoverAccountSuccess={ props.handleRecoverAccountSuccess }
               /> 
            } 
         />
      );
   }
}

export default RecoverAccount;
