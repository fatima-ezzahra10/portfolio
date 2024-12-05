import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/developpeuse-girl.svg";
import { ImPointRight } from 'react-icons/im';

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";



const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSE-MOI <span className="yellow"> ME PRÉSENTER </span> MOI-MÊME
            </h1>
            <p className="home-about-body">
              Bonjour, je m'appelle <span className="yellow">Fatima-Ezzahra Mardi, </span>
              et je suis basée à <span className="yellow"> Casablanca, Maroc.</span>
              <br />
              <br />
              Actuellement en formation pour obtenir une licence professionnelle en développement web et mobile,
              je suis passionnée par la création de solutions numériques modernes et innovantes.                <br />
              <br />
              En tant que développeuse web,
              je maîtrise
              <b className="yellow"> HTML, CSS, JavaScript, PHP </b>, et je possède une solide expérience avec des outils tels que
              <b className="yellow"> WordPress</b>. Je développe également des solutions sur mesure adaptées aux besoins de mes clients.
              <br />
              <br />Je suis motivée par l'apprentissage continu et je suis également en train d'explorer des technologies modernes telles que
              <b className="yellow"> React.js </b> et  <b className="yellow"> Angular </b>
              pour le frontend et
              <b className="yellow"> Java</b> pour le backend.
              <br />
              <br />
            

              <p>
                J'ai également une passion pour le développement de nouvelles <b className="yellow">technologies web</b> et la création de produits numériques innovants.
                <br />
                <br />
                En plus de cela, je suis très intéressée par l'exploration de domaines liés à <b className="yellow">SQL</b> et à l'utilisation de <b className="yellow">UML</b> pour la modélisation des systèmes.
              </p>

              <p style={{ textAlign: 'justify' }}>
                En dehors du codage, je suis une personne curieuse et active. Dans mon temps libre, j'aime :
              </p>

              <ul>
                <li>
                  <ImPointRight />la natation
                </li>
                <li>
                  <ImPointRight /> Découvrir de nouveaux lieux en voyageant
                </li>
                <li>
                  <ImPointRight />la boxe
                </li>
              </ul>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à me <span className="yellow">contacter.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fatima-ezzahra10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:fatimaezzahra.mardi22@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="gmail"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fatima-ezzahra-mardi-730315258"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fati.mardi22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <SiInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default About