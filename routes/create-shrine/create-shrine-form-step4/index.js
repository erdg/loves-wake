import { h, Component } from 'preact';

import { TextInput } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';

const CreateShrineFormStep4 = (props) => {
   return (
      <div>
         <h4>Step 4</h4>
         <NextStepButton 
            onClick={ props.handleNextStep }
         />

      </div>
   );
}

export { CreateShrineFormStep4 };  