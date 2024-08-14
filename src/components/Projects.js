import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project_img1.png";
import projImg2 from "../assets/img/project_img2.png";
import projImg3 from "../assets/img/project_img3.png";
import projImg4 from "../assets/img/project_img4.png";
import projImg5 from "../assets/img/project_img5.png";
import projImg6 from "../assets/img/project_img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SalesPro+ Advanced Sales Prediction",
      description: "Machine Learning",
      imgUrl: projImg1,
    },
    {
      title: "Whack - a - Zombie",
      description: "Game & Development",
      imgUrl: projImg2,
    },
    {
      title: "NXTFit wave Fitness Tracker",
      description: "Website",
      imgUrl: projImg4,
    },
    {
      title: "MultiThread Sorting in Java",
      description: "Java Swing UI",
      imgUrl: projImg3,
    },
    {
      title: "To-Do List",
      description: "Web Development",
      imgUrl: projImg5,
    },
    {
      title: "SmartStreet Light System",
      description: "Arduino IOT",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Experienced in developing robust projects using Java, Spring Boot, ReactJS, and Machine Learning, focused on creating efficient and scalable solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project List 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project List 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project List 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>New Projects Upcoming...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>New Projects Upcoming...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}