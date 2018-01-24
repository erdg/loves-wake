import { h, Component } from 'preact';
import { DateInput } from '../../../components/form-inputs';
import { Dialog } from '../../../components/dialog';

const DateOfBirth = (props) => (

   <div>

      <Dialog active="true">
         <div class="card">
            <div class="card-body">
               When was { props.firstName } born?
            </div>
         </div>
      </Dialog>

      <DateInput
         label="Date of Birth"
      />

   </div>

)

export { DateOfBirth };


