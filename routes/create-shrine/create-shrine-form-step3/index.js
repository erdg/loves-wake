import { h, Component } from 'preact';

import { TextInput, Radio, Label } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';
import { PrevStepButton } from '../prev-step-button';

import { ChooseGender } from './choose-gender';
import { DateOfBirth } from './date-of-birth';
import { StillWithUs } from './still-with-us';
import { DateOfDeath } from './date-of-death';

const CreateShrineFormStep3 = (props) => {
   return (
      <div>
         <h6 class="text-center text-gray">Step 3 of 6</h6>

         <ChooseGender 
            firstName={ props.firstName }
            subjPronoun={ props.subjPronoun }
            objPronoun={ props.objPronoun }
            posPronoun={ props.posPronoun }
            handleGenderChange={ props.handleGenderChange } 
         />

         <DateOfBirth 
            firstName={ props.firstName }
         />

         <StillWithUs
            firstName={ props.firstName }
            handleDeath={ props.handleDeath }
         />

         <DateOfDeath 
            deceased={ props.deceased }
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
