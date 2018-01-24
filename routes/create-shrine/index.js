import { h, Component } from 'preact';

import { FlexContainer } from '../../components/flex-container';
import { CreateShrineFormContainer } from './create-shrine-form-container/';
import { AvatarRail } from './avatar-rail/';

class CreateShrine extends Component {
   state = {
      step: 1,

      firstName: '',
      lastName: '',
      subjPronoun: '',
      objPronoun: '',
      posPronoun: '',
      deceased: false
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

   _handleGenderChange = (e) => {
      if ( e.target.value === 'Male' ) {
         this.setState({ 
            subjPronoun: 'he', 
            objPronoun: 'him',
            posPronoun: 'his'
         });
      } else if ( e.target.value === 'Female' ) {
         this.setState({ 
            subjPronoun: 'she', 
            objPronoun: 'her',
            posPronoun: 'her'
         });
      }
   }

   // this is a terrible function name...
   // as if death could be handled with with 3 lines of code.
   _handleDeath = (e) => {
      if ( e.target.value === "true" ) {
         this.setState({ deceased: true });
      } else if ( e.target.value === "false" ) {
         this.setState({ deceased: false });
      }
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
                     firstName={ firstName }
                     lastName={ lastName }
                  />
               </div>
            }

            formRail={
               <div class="m-2">

                  {/* dynamic header */}
                  {
                     step > 1 && firstName 
                        ?
                        <h2 class="text-center">{firstName}'s Shrine</h2>
                        :
                        <h2 class="text-center"> Create a New Shrine</h2>
                  }

                  <p class="text-center text-gray">
                     Step {step} of 6
                  </p>

                  <CreateShrineFormContainer
                     step={ step }
                     handleNextStep={ this._handleNextStep }
                     handlePrevStep={ this._handlePrevStep }

                     firstName={ firstName }
                     lastName={ lastName }
                     handleFirstNameChange={ this._handleFirstNameChange }
                     handleLastNameChange={ this._handleLastNameChange }

                     subjPronoun={ this.state.subjPronoun }
                     objPronoun={ this.state.objPronoun }
                     posPronoun={ this.state.posPronoun }
                     handleGenderChange={ this._handleGenderChange }

                     deceased={ this.state.deceased }
                     handleDeath={ this._handleDeath }
                  />
               </div>
            }

         />

      );
   }
}

export default CreateShrine;

