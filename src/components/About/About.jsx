import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import AboutImg from "../Image/AboutImg";
import PortfolioContext from "../../context/context";
import resume from "../../assets/resume.pdf";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="Joseph McAllister profile" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "I am an entrepreneur that truly sees software as a way to make the world a better place. I've had a passion for software engineering since I first stumbled upon Code Academy in high school."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "Since then, I graduated from Cornell University where I cofounded Roo Storage. Roo was acquired by Handled in February 2020 after raising 6 figures in seed capital."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "I thrive in passionate, cross-functional teams obsessed with achieving outcomes for both the customer and the business. I am currently a full-stack software engineer at Microsoft working on Azure Data Factory and Azure Synapse Analytics."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
