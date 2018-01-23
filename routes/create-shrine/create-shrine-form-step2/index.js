import { h, Component } from 'preact';

import { FileInput } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';
import { PrevStepButton } from '../prev-step-button';

const CreateShrineFormStep2 = (props) => {
   return (
      <div>
         <h6 class="text-center text-gray">Step 2 of 6</h6>
         <FileInput 
            class="text-ellipsis"
            label="Upload a Photo" 
         />
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

export { CreateShrineFormStep2 }; 
