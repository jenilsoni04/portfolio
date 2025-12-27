import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Jenil Soni</span> from{" "}
            <span className="purple">Ahmedabad, Gujarat, India</span>.
            <br />
            I’m currently pursuing my Master’s in Information Technology From <span className="purple">Dhirubhai Ambani University</span>
            <br />  
            <br />
            Outside of development, I enjoy activities that help me stay focused
            and balanced:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching movies and series 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focused on learning, building, and improving every day."
          </p>
          <footer className="blockquote-footer">Jenil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
