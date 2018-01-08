// preact
import { h, Component } from 'preact';

// preact-router
import Router from 'preact-router';

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

// get that navbar
import NavBar from './components/navbar';

export default class App extends Component {
	render() {
		return (
         <div>
            <NavBar />
            <Router>
               <Home path="/" />
               <Login path="/login" />
               <Signup path="/signup" />
               <ConfirmAccount path="/confirm-account" />
            </Router>
         </div>
		);
	}
}
