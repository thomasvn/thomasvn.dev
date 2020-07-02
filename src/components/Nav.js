import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/writing'>Writing</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;