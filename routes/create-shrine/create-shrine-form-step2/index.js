import { h, Component } from 'preact';

import { FileInput } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';
import { PrevStepButton } from '../prev-step-button';

const CreateShrineFormStep2 = (props) => {
   return (
      <div>
         <h4>Step 2</h4>
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
