import React from 'react';
import portrait from '../img/Thomas.jpg'

class AboutMe extends React.Component {
  /**
   * TODO:
   * - Add a single sentence about who I am
   * - Add a brief paragraph, then contact info and links
   */
  render() {
    return (
      <div className="AboutMe">
        <img src={portrait} className="portrait" alt="Thomas's Portrait"></img>
        <p>Hi! Glad to have you here.</p>
        <p>This site's still under construction so please do come back soon.</p>
      </div>
    );
  }
}

export default AboutMe;