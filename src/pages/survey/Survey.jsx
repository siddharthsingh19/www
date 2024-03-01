import React from "react";
import "./survey.css";
const Survey = () => {
  return (
    <div className="survey">
      <h3>Questions</h3>
      <ul>
        <li>
          <h4>How's your footfall</h4>
          <li>
            <h4>From where does your patients come?</h4>
            <li>● Local</li>
            <li>● Reference</li>
            <li>● Google Ads</li>
            <li>● JustDial</li>
            <li>● Practo</li>
            <li>● Website</li>
            <li>● fb</li>
            <li>● insta</li>
            <li>● others</li>
          </li>
        </li>
        <li>Have you used google ads?</li>
        <li>
          Do you have a website? Do you think website is important? How does it
          help your business?
        </li>
        <li>How much have you spent on your website?</li>
        <li>How much do you spent on your google ads?</li>
        <li>Do you know about SEO?</li>
        <li>
          What apps do you use? Apps that you need like appointment booking and
          ol.
        </li>
        <li>What do you think should be a nominal cost for a website?</li>
        <li>
          Do you use any app or software that helps in collaboration with other
          dentists or your patients?
        </li>
        <li>
          <h4>Would you be interested in an app where </h4>
          <li>● no need of a website</li>
          <li>● get clients.</li>
          <li>● add blogs on your own</li>
          <li>● write stuff about what you do</li>
          <li>● ease of running ads.</li>
          <li>● collaborate with other dentists</li>
          <li>● appointment</li>
        </li>
        <li>Would you pay 1000rs. yearly for subscribing to such an app</li>
      </ul>
    </div>
  );
};

export default Survey;
