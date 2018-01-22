import { h, Component } from 'preact';

import { TextInput } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';

const CreateShrineFormStep1 = (props) => {
   return (
      <div>
         <h4>Step 1</h4>
         <TextInput label="First Name" />
         <TextInput label="Last Name" />
         <div class="row my-2">
            <NextStepButton 
               onClick={ props.handleNextStep }
            />
         </div>
      </div>
   );
}

export { CreateShrineFormStep1 };  
