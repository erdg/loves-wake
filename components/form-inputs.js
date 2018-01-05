import { Component } from 'preact';

import { Dialog } from './dialog';

const EmailInput = (props) => (
   <div>
      <label class="form-label">Email</label>
      <input
         value={props.email}
         onChange={props.handleEmailChange}
         type="email"
         class="form-input" 
         placeholder="Your email"
      />
   </div>
)

class PasswordInput extends Component {

   constructor (props) {
      super(props);
      this._toggleDialog = this._toggleDialog.bind(this);
      this.state = {
         showDialog: false
      };
   }

   _toggleDialog () {
      let showDialog = !this.state.showDialog;
      this.setState({ showDialog });
   }

   render (props) {
      return (
         <div>

            <Dialog active={ this.state.showDialog }>
               <div class="card">
                  <div class="card-body">
                     Make sure you have a really secure password 
                     or else your account could get all fucked up by hackers.
                  </div>
               </div>
            </Dialog>

            <label class="form-label">
               Password
            </label>
            <input 
               value={ props.password }
               onChange={ props.handlePasswordChange }
               onFocusIn={ this._toggleDialog }
               onFocusOut={ this._toggleDialog }
               class="form-input" 
               type={ props.showPassword ? "text" : "password" }
               placeholder="Your password"
            />

            <label class="form-switch">
               <input type="checkbox" 
                  onClick={ props.toggleShowPassword } 
               />
               <i class="form-icon"></i>
               Show password
            </label>

         </div>
      )
   }
}

export { EmailInput, PasswordInput };
