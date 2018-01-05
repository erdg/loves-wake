import { h, Component } from 'preact';

import { FlexContainer } from '../components/flex-container';
import { LoginFormContainer } from '../components/login-form-container';

class Login extends Component {
   render () {
      return (
         <FlexContainer formRail={ <LoginFormContainer /> } />
      );
   }
}

export default Login;

