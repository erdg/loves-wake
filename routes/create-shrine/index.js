import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { CreateShrineFormContainer } from './create-shrine-form-container/';
import { AvatarRail } from './avatar-rail/';

class CreateShrine extends Component {
   state = {
      step: 1,

      firstName: '',
      lastName: ''
   };

   _handleNextStep = () => {
      let step = this.state.step + 1;
      this.setState({ step: step });
   }

   _handlePrevStep = () => {
      let step = this.state.step - 1;
      this.setState({ step: step });
   }

   _handleFirstNameChange = (e) => {
      this.setState({ firstName: e.target.value })
   }

   _handleLastNameChange = (e) => {
      this.setState({ lastName: e.target.value })
   }

   render (props) {

      const step = this.state.step;
      const firstName = this.state.firstName;
      const lastName = this.state.lastName;

      return (

         <FlexContainer 

            avatarRail={
               <div class="m-2">
                  <AvatarRail 
                     step={ step }
                     name={ firstName }
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

                     firstName={ firstName }
                     lastName={ lastName }
                     handleFirstNameChange={ this._handleFirstNameChange }
                     handleLastNameChange={ this._handleLastNameChange }
                  />
               </div>
            }

         />

      );
   }
}

export default CreateShrine;

