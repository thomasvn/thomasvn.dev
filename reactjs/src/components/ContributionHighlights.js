import React from 'react';

class ContributionHighlights extends React.Component {
  render() {
    return (
      <div className="ContributionHighlights">
        <h4>Recent contributions ...</h4>
        <p>These are a few of the causes that I make monthly donations to. I'd love for you to check out their websites, read their reports, and donate to their causes if you are able to at this time.</p>
        <ul>
          <li><mark>Direct Relief</mark> Providing global disaster relief and sustainable solutions.</li>
          <li><mark>LifeSTEPS</mark> Empowering residents of California's affordable housing communities. </li>
          <li><mark>CampaignZero</mark> Advocating policy solutions in response to police brutality.</li>
        </ul>
        <p>I also currently volunteer with <mark>WordsAlive San Diego</mark>! If you're interested in joining me for the ride, send me a message and I'll help you get started!</p>
      </div>
    );
  }
}

export default ContributionHighlights;