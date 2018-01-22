import { h, Component } from 'preact';

import { TextInput } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';
import { PrevStepButton } from '../prev-step-button';

const CreateShrineFormStep4 = (props) => {
   return (
      <div>

         <h4>Step 4</h4>

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

export { CreateShrineFormStep4 };  
