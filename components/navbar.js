import { h, Component } from 'preact';
import { Link } from 'preact-router';

const NavBar = () => {
   return (
      <header class="navbar m-2">
         <section class="navbar-section">
            <Link class="navbar-brand" activeClassName="active" href="/">Love's Wake</Link>
         </section>
         <section class="navbar-section">
            <Link class="btn btn-primary" activeClassName="active" href="#">Start a Shrine</Link>
            <Link class="btn btn-link" activeClassName="active" href="/login">Login</Link>
            <Link class="btn btn-link" activeClassName="active" href="/signup">Signup</Link>
         </section>
      </header>
   )
};

export default NavBar;
