import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className='Nav'>
        <ul>
          <div className='brand'>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </div>
          <div className='drop'>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/writing'>Writing</Link>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}


export default Nav;