import { h, Component } from 'preact';

import { Dialog } from '../../../components/dialog';
import { TextInput, Radio, Label } from '../../../components/form-inputs/';

const StillWithUs = (props) => (
   <div>

      <Dialog active="false">
      </Dialog>

      <Label>Is { props.firstName } still with us?</Label>
      <div onChange={ props.handleGenderChange } class="col mx-2">
         <div class="row">
            <Radio 
               label="Still alive and well" 
               value="alive"
            />
         </div>
         <div class="row">
            <Radio 
               label="Will pass soon" 
               value="passing"
            />
         </div>
         <div class="row">
            <Radio 
               label="Passed away" 
               value="passed"
            />
         </div>
      </div>

   </div>
)

export { StillWithUs };
