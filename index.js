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

// get that navbar
import NavBar from './components/navbar';

export default class App extends Component {
   state = {
      user: '',
      loginToken: '',
      email: ''
   }

   handleLoginSuccess = (user, token) => {
      this.setState({
         user: user,
         loginToken: token
      });
   }

   handleSignupSuccess = (email) => {
      this.setState({
         email: email
      });
   }

   handleLogout = () => {
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
                  handleLoginSuccess={ this.handleLoginSuccess }
               />
               <Signup 
                  path="/signup" 
                  handleSignupSuccess={ this.handleSignupSuccess }
               />
               <ConfirmAccount 
                  path="/confirm-account" 
                  email={ this.state.email }
                  handleLoginSuccess={ this.handleLoginSuccess }
               />
               <Profile 
                  path="/profile" 
                  user={ this.state.user }
                  loginToken={ this.state.loginToken }
                  handleLogout={ this.handleLogout }
               />
            </Router>
         </div>
		);
	}
}
