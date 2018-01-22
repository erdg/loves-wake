import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { CreateShrineFormContainer } from './create-shrine-form-container/';
import { AvatarRail } from './avatar-rail/';

class CreateShrine extends Component {
   state = {
      step: 1
   };

   _handleNextStep = () => {
      let step = this.state.step + 1;
      this.setState({ step: step });
   }

   _handlePrevStep = () => {
      let step = this.state.step - 1;
      this.setState({ step: step });
   }

   render (props) {
      const step = this.state.step;
      return (
         <FlexContainer 
            avatarRail={
               <div class="m-2">
                  <AvatarRail 
                     step={ step }
                  />
               </div>
            }
            formRail={
               <div class="m-2">
                  <h1>Create a New Shrine</h1>
                  <CreateShrineFormContainer
                     step={ step }
                     handleNextStep={ this._handleNextStep }
                     handlePrevStep={ this._handlePrevStep }
                  />
               </div>
            }
         />
      );
   }
}

export default CreateShrine;

