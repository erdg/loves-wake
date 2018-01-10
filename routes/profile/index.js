import { h, Component } from 'preact';

const Profile = (props) => {
   return (
      <div>
         <h1>Profile Page</h1>
         <p> 
            User '{props.user}' logged in with login token: '{props.loginToken}'
         </p>
         <button 
            class="btn btn-primary"
            onClick={ props.handleLogout }
         >
            Logout
         </button>
      </div>
   )
}

export default Profile;
