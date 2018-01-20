import { h, Component } from 'preact';

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

const TextInput = ({ label, ...props}) => (
   <div>
      <label class="form-label">
         {label}
      </label>
      <input
         {...props}
         type="text"
         class="form-input"
      />
   </div>
)

const FileInput = ({ label, ...props}) => (
   <div>
      <label class="form-label">
         {label}
      </label>
      <input
         {...props}
         type="file"
         class="form-input"
      />
   </div>
)


const NumberInput = (props) => (
   <input 
      {...props}
      type="number"
      class="form-input"
   />
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
      let label = props.label ? props.label : 'Password';
      return (
         <div>

            <label class="form-label">
               { label }
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

export { EmailInput, TextInput, NumberInput, PasswordInput, FileInput };
