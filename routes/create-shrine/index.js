import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { CreateShrineFormContainer } from './components/create-shrine-form-container';
import { AvatarRail } from './components/avatar-rail';

class CreateShrine extends Component {
   render (props) {
      return (
         <FlexContainer 
            avatarRail={
               <div class="m-2">
                  <AvatarRail />
               </div>
            }
            formRail={ 
               <div class="m-2">
                  <CreateShrineFormContainer /> 
               </div>
            } 
         />
      );
   }
}

export default CreateShrine;

