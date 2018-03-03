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
   // as if death could be handled with 3 lines of code.
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

         <div>

            {/* this is a bad class name */}
            <div class="flex-container-heading">
               {/* dynamic heading */}
               {
                  step > 1 && firstName 
                     ?
                     <h1>{firstName}'s Shrine</h1>
                     :
                     <h1> Create a New Shrine</h1>
               }

               <p class="text-gray">
                  Step {step} of 6
               </p>
            </div>

            <FlexContainer 

               avatarRail={
                  <AvatarRail 
                     step={ step }
                     firstName={ firstName }
                     lastName={ lastName }
                  />
               }

               formRail={
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
               }

            />

         </div>

      );
   }
}

export default CreateShrine;

