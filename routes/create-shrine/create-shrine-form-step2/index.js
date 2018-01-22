import { h, Component } from 'preact';

import { FileInput } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';

const CreateShrineFormStep2 = (props) => {
   return (
      <div>
         <h4>Step 2</h4>
         <FileInput 
            class="text-ellipsis"
            label="Upload a Photo" 
         />
         <NextStepButton 
            onClick={ props.handleNextStep } 
         />
      </div>
   );
}

export { CreateShrineFormStep2 }; 
