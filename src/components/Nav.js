import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

/**
 * <Link>
 * The Link component lets us create anchors (<a>) in our
 * page in a way that our <Route> components will understand.
 * <Link to="">
 * Ensure you pass into the <Link> a "to" prop that matches
 * the "path" prop in your <Route> component(s)!
 */
function Nav ()
{
  return (
    <nav className="to-do-nav">
      <h2>To-Do App Navigation</h2>
      <ul>
        <li>
          <Link to="/">
            Home (To-Dos List)
          </Link>
        </li>
        <li>
          <Link to="/form">
            Form (Add a New To-Do)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
