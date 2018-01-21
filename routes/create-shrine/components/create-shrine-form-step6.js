import { h, Component } from 'preact';

import { TextInput } from '../../../components/form-inputs/';
import { NextStepButton } from './next-step-button';

const CreateShrineFormStep6 = (props) => {
   return (
      <div>
         <h1>Create a New Shrine</h1>
         <h4>Step 6</h4>
         <NextStepButton 
            onClick={ props.handleNextStep }
         />

      </div>
   );
}

export { CreateShrineFormStep6 };  
