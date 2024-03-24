import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import json from "../../utils";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{json.name} </span>
            currently living in{" "}
            <span className="purple"> Ohio, United States of America.</span>
            <br />
            {json.about.myself}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {json.about.otherskills.map((o) => {
              return (
                <li className="about-activity">
                  <ImPointRight /> {o}
                </li>
              );
            })}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
