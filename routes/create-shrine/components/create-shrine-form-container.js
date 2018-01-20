import { h, Component } from 'preact';
import { route } from 'preact-router';

import { CreateShrineFormStep1 } from './create-shrine-form-step1';
import { CreateShrineFormStep2 } from './create-shrine-form-step2';

class CreateShrineFormContainer extends Component { 
   state = {
      step: 1
   };

   _handleNextStep = () => {
      let next = this.state.step + 1;
      this.setState({ step: next });
   }

   render (props) {
      switch (this.state.step) {
         case 1:
            return (
               <CreateShrineFormStep1
                  handleNextStep={ this._handleNextStep }
               />
            );
            break;
         case 2:
            return (
               <CreateShrineFormStep2 />
            );
            break;
      }
   }
}

export { CreateShrineFormContainer };
