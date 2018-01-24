import { h, Component } from 'preact';
import classNames from 'classnames';
import { DateInput } from '../../../components/form-inputs';
import { Dialog } from '../../../components/dialog';

const DateOfDeath = (props) => {

   let classes = classNames({ 'd-none': !props.deceased });

   return (
      <div class={ classes } >

         <Dialog active="true">
            <div class="card">
               <div class="card-body">
                  We're sorry for your loss.  When did { props.firstName } pass?
               </div>
            </div>
         </Dialog>

         <DateInput
            label="Date of Death"
         />

      </div>
   )
}

export { DateOfDeath };


