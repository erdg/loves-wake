import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { CreateShrineFormContainer } from './components/create-shrine-form-container';

class CreateShrine extends Component {
   render (props) {
      return (
         <FlexContainer 
            formRail={ 
               <CreateShrineFormContainer 
               /> 
            } 
         />
      );
   }
}

export default CreateShrine;

