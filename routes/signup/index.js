import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { SignupFormContainer } from './components/signup-form-container';

class Signup extends Component {
   render () {
      return (
         <FlexContainer formRail={ <SignupFormContainer /> } />
      );
   }
}

export default Signup;

