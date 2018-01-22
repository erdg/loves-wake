import { h, Component } from 'preact';

import { TextInput } from '../../../components/form-inputs/';
import { PrevStepButton } from '../prev-step-button';

const CreateShrineFormStep6 = (props) => {
   return (
      <div>
         <h4>Step 6</h4>

         <div class="row my-2">
            <PrevStepButton
               onClick={ props.handlePrevStep }
            />
         </div>

      </div>
   );
}

export { CreateShrineFormStep6 };  
