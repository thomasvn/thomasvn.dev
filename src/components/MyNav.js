import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { 
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

class MyNav extends React.Component {
  render() {
    return (
      <div class="MyNav">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand><Link to='/'>Home</Link></Navbar.Brand>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav.Link><Link to='/projects'>Projects</Link></Nav.Link>
            <Nav.Link><Link to='/writing'>Writing</Link></Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

      // <div className='Nav'>
      //   <ul>
      //     <li>
      //       <Link to='/'>Home</Link>
      //     </li>
      //     <li>
      //       <Link to='/projects'>Projects</Link>
      //     </li>
      //     <li>
      //       <Link to='/writing'>Writing</Link>
      //     </li>
      //   </ul>
      // </div>

export default MyNav;