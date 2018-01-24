import { h, Component } from 'preact';

import { Dialog } from '../../../components/dialog';
import { TextInput, Radio, Label } from '../../../components/form-inputs/';

const ChooseGender = (props) => (
   <div>

      <Dialog active="true">
         <div class="card">
            <div class="card-body">
               <strong>We'll use this answer to phrase our questions:</strong>
               <p>Example: How did...</p>
            </div>
         </div>
      </Dialog>

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
)

export { ChooseGender };
