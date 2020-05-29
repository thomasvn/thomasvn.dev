import React from 'react';
import portrait from '../img/Thomas.jpg'

class AboutMe extends React.Component {
  /**
   * TODO:
   * - Add a picture of myself
   * - Add a single sentence about who I am
   * - Add a brief paragraph, then contact info and links
   */
  render() {
    return (
      <div className="AboutMe">
        <p>Hi, I'm Thomas and I'm trying to build my first website</p>
        <img src={portrait} alt="Thomas's Portrait"></img>
      </div>
    );
  }
}

export default AboutMe;