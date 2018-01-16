// preact
import { h, Component } from 'preact';

// preact-router
import Router from 'preact-router';
import { route } from 'preact-router';

// css
import './css/spectre.min.css';
import './css/spectre-icons.min.css';
import './css/flex-container.css';
import './css/dialog.css';

// routes
import Login  from './routes/login/';
import Home from './routes/home/';
import Signup from './routes/signup/';
import ConfirmAccount from './routes/confirm-account/';
import Profile from './routes/profile/';
import RecoverAccount from './routes/recover-account/';
import ResetPassword from './routes/reset-password/';

// get that navbar
import NavBar from './components/navbar';

export default class App extends Component {
   state = {
      user: '',
      loginToken: '',
      email: '',
      confirmed: false
   }

   _handleLoginSuccess = (user, token) => {
      this.setState({
         user: user,
         loginToken: token
      });
   }

   _handleSignupSuccess = (email) => {
      this.setState({
         email: email
      });
   }

   _handleRecoverAccountSuccess = (email) => {
      this.setState({
         email: email
      });
   }

   _handleResetPasswordSuccess = (user, token) => {
      this.setState({
         user: user,
         loginToken: token
      });
   }

   _handleLogout = () => {
      this.setState({
         user: '',
         loginToken: ''
      });
      route("/login", true);
   }

	render() {
		return (
         <div>

            <NavBar />

            <Router>

               <Home path="/" />

               <Login 
                  path="/login" 
                  handleLoginSuccess={ this._handleLoginSuccess }
                  handleRecoverAccountSuccess={ this._handleRecoverAccountSuccess }
               />

               <RecoverAccount
                  path="/recover-account"
                  email={ this.state.email }
               />

               <ResetPassword
                  path="/reset-password"
                  email={ this.state.email }
                  handleResetPasswordSuccess={ this._handleResetPasswordSuccess }
               />

               <Signup 
                  path="/signup" 
                  handleSignupSuccess={ this._handleSignupSuccess }
               />

               <ConfirmAccount 
                  path="/confirm-account" 
                  email={ this.state.email }
                  handleLoginSuccess={ this._handleLoginSuccess }
               />

               <Profile 
                  path="/profile" 
                  user={ this.state.user }
                  loginToken={ this.state.loginToken }
                  handleLogout={ this._handleLogout }
               />

            </Router>

         </div>
		);
	}
}
