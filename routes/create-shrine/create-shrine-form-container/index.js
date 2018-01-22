import { h, Component } from 'preact';
import { route } from 'preact-router';

import { CreateShrineFormStep1 } from '../create-shrine-form-step1';
import { CreateShrineFormStep2 } from '../create-shrine-form-step2';
import { CreateShrineFormStep3 } from '../create-shrine-form-step3';
import { CreateShrineFormStep4 } from '../create-shrine-form-step4';
import { CreateShrineFormStep5 } from '../create-shrine-form-step5';
import { CreateShrineFormStep6 } from '../create-shrine-form-step6';

class CreateShrineFormContainer extends Component { 
   render (props) {
      switch (props.step) {
         case 1:
            return (
               <CreateShrineFormStep1
                  handleNextStep={ props.handleNextStep }
               />
            );
            break;

         case 2:
            return (
               <CreateShrineFormStep2 
                  handleNextStep={ props.handleNextStep }
                  handlePrevStep={ props.handlePrevStep }
               />
            );
            break;

         case 3:
            return (
               <CreateShrineFormStep3
                  handleNextStep={ props.handleNextStep }
                  handlePrevStep={ props.handlePrevStep }
               />
            );
            break;

         case 4:
            return (
               <CreateShrineFormStep4
                  handleNextStep={ props.handleNextStep }
                  handlePrevStep={ props.handlePrevStep }
               />
            );
            break;

         case 5:
            return (
               <CreateShrineFormStep5
                  handleNextStep={ props.handleNextStep }
                  handlePrevStep={ props.handlePrevStep }
               />
            );
            break;

         case 6:
            return (
               <CreateShrineFormStep6
                  handleNextStep={ props.handleNextStep }
                  handlePrevStep={ props.handlePrevStep }
               />
            );
            break;
      }
   }
}

export { CreateShrineFormContainer };
