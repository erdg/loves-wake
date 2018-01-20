import { h, Component } from 'preact';

import { TextInput } from '../../../components/form-inputs/';
import { NextStepButton } from './next-step-button';

const CreateShrineFormStep1 = (props) => {
   return (
      <div>
         <h1>Create a New Shrine</h1>
         <h4>Step 1</h4>
         <TextInput label="First Name" />
         <TextInput label="Last Name" />
         <NextStepButton 
            onClick={ props.handleNextStep }
         />

      </div>
   );
}

export { CreateShrineFormStep1 };  
