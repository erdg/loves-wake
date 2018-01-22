import { h, Component } from 'preact';

import { TextInput, Radio, Label } from '../../../components/form-inputs/';
import { NextStepButton } from '../next-step-button';

const CreateShrineFormStep3 = (props) => {
   return (
      <div>
         <div>
            <Label>Gender</Label>
            <div class="col mx-2">
               <div class="row">
                  <Radio label="Female" name="gender" />
                  <span class="text-gray">- She/Her</span>
               </div>
               <div class="row">
                  <Radio label="Male" name="gender" />
                  <span class="text-gray">- He/Him</span>
               </div>
               <div class="row">
                  <Radio label="Other" name="gender" />
               </div>
            </div>
         </div>

         <NextStepButton 
            onClick={ props.handleNextStep }
         />

      </div>
   );
}

export { CreateShrineFormStep3 };  