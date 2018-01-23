import { h, Component } from 'preact';

import { TextInput } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';
import { PrevStepButton } from '../prev-step-button';

const CreateShrineFormStep5 = (props) => {
   return (
      <div>
         <h6 class="text-center text-gray">Step 5 of 6</h6>
         <div class="row my-2">
            <PrevStepButton
               onClick={ props.handlePrevStep }
            />
            <NextStepButton 
               onClick={ props.handleNextStep }
            />
         </div>
      </div>
   );
}

export { CreateShrineFormStep5 };  
