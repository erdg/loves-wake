import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { ConfirmAccountFormContainer } from './components/confirm-account-form-container';

class ConfirmAccount extends Component {
   render () {
      return (
         <FlexContainer formRail={ <ConfirmAccountFormContainer /> } />
      );
   }
}

export default ConfirmAccount;

