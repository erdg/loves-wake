import { h, Component } from 'preact';

import { TextInput } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';

const CreateShrineFormStep1 = (props) => {
   return (
      <div>
         <h6 class="text-center text-gray">Step 1 of 6</h6>
         <TextInput 
            label="First Name" 
            firstName={ props.firstName }
            onChange={ props.handleFirstNameChange }
         />
         <TextInput 
            label="Last Name" 
            lastName={ props.lastName }
            onChange={ props.handleLastNameChange }
         />
         <div class="row my-2">
            <NextStepButton 
               onClick={ props.handleNextStep }
            />
         </div>
      </div>
   );
}

export { CreateShrineFormStep1 };  
