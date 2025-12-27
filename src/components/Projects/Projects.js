import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skillxchange from "../../Assets/Projects/skillxchange.png";
import wholescaler from "../../Assets/Projects/wholescaler.png";
import nomadskey from "../../Assets/Projects/nomadskey.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={skillxchange}
    isBlog={false}
    title="Skill Exchange"
    description="A peer-to-peer learning platform that enables users to exchange skills based on mutual interests. Users can list the skills they offer and want to learn, get matched accordingly, and collaborate through direct communication and scheduled sessions. The platform promotes community-driven learning with basic moderation, user reporting, and curated external learning resources."
    ghLink="https://github.com/jenilsoni04/SkillExchange"
    demoLink="https://skillxchange-bice.vercel.app/"
  />
</Col>


          <Col md={4} className="project-card">
  <ProjectCard
  imgPath={wholescaler}
    isBlog={false}
    title="Wholesalers – B2B Connection Platform"
    description="A B2B platform that connects wholesalers and retailers through a dual-portal system. Wholesalers can manage product catalogs, inventory, minimum order quantities (MOQ), orders, and invoices, while retailers can browse products, view pricing and MOQ details, and place purchase orders directly through the platform. The system digitizes manual wholesale workflows with real-time stock visibility, order status tracking, and secure role-based access using JWT authentication."
    ghLink="https://github.com/jenilsoni04/Wholescalers"
    demoLink="https://wholescalers-proj-frontend.vercel.app/wholesaler"
  />
</Col>

        <Col md={4} className="project-card">
  <ProjectCard
  imgPath={nomadskey}
    isBlog={false}
    title="NomadsKey"
    description="A backend platform that connects travelers with hotel owners for room listing and booking management. The system supports role-based access for travelers, hotel owners, and admins using JWT authentication. It optimizes hotel and room retrieval using Redis caching and implements dynamic room pricing through the Strategy Design Pattern to adjust rates based on seasonality, demand, and availability."
    ghLink="https://github.com/jenilsoni04/NomadsKey"
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
