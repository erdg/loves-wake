import { h, Component } from 'preact';

import { TextInput, Radio, Label } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';
import { PrevStepButton } from '../prev-step-button';

import { ChooseGender } from './choose-gender';
import { DateOfBirth } from './date-of-birth';

const CreateShrineFormStep3 = (props) => {
   return (
      <div>
         <h6 class="text-center text-gray">Step 3 of 6</h6>

         <ChooseGender />

         <DateOfBirth 
            firstName={ props.firstName }
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

export { CreateShrineFormStep3 };  
