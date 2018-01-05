import { Component } from 'preact';

const EmailInput = (props) => (
   <div>
      <label class="form-label">Email</label>
      <input
         {...props}
         type="email"
         class="form-input" 
         placeholder="Your email"
      />
   </div>
)

class PasswordInput extends Component {

   constructor (props) {
      super(props);
      this._toggleShowPassword = this._toggleShowPassword.bind(this);
      this.state = {
         showPassword: false
      };
   }

   _toggleShowPassword () {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
   }

   render (props) {
      return (
         <div>

            <label class="form-label">
               Password
            </label>
            <input 
               {...props}
               class="form-input" 
               type={ this.state.showPassword ? "text" : "password" }
               placeholder="Your password"
            />

            <ShowPasswordSwitch onClick={ this._toggleShowPassword } />

         </div>
      )
   }
}

const ShowPasswordSwitch = (props) => (
   <div>
      <label class="form-switch">
         <input type="checkbox" 
            {...props}
         />
         <i class="form-icon"></i>
         Show password
      </label>
   </div>
)

export { EmailInput, PasswordInput };
