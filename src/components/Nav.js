import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div className='Nav'>
        <ul>
          <div className='brand'>
            <li>
              <a href='/'>Home</a>
            </li>
          </div>
          <div className='drop'>
            <li>
              <a href='/projects'>Projects</a>
            </li>
            <li>
              <a href='/writing'>Writing</a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}


export default Nav;