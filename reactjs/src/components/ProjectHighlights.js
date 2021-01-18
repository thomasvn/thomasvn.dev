import React from 'react';

class ProjectHighlights extends React.Component {
  render() {
    return (
      <div className="ProjectHighlights">
        <h4>Recent projects ...</h4>
        <ul>
          <li><mark>thomasvn.dev</mark> My journey learning the React.js framework. In the process I wanted to create space to share my work and my thoughts</li>
          <li><mark>Thinking-Functionally</mark> An attempt to understand functional programming philosophy. I wanted to start by familiarizing myself with common concepts such as pure functions, removal of side effects, and higher order functions through javascript. I'm also beginning to learn Haskell for fun.</li>
          <li><mark>Bioinformatics (Finding Hidden Messages in DNA)</mark> My partner and I are merging our interests of developmental biology and computer science to learn something new together. All code challenges solved using R.</li>
          <li><mark>Thesis: Towards Automated Clarity Analysis for Privacy Policies</mark> I explored the factors which affect the clarity of privacy policies and proposed an automated approach to rationalizing and improving the clarity of a policy.</li>
          <li><mark>DNS Spoof Attack Simulation</mark> Set up a software defined network (SDN) containing a DNS server and two webservers. Then I set up an attacker machine to intercept DNS requests and respond with spoofed DNS requests to direct the victim towards a malicious web server. Tech stack: mininet, dnsmasq, scapy.</li>
        </ul>
      </div>
    );
  }
}

export default ProjectHighlights;