import s from './IntroSection.module.scss';
import avatar from '../../../assets/Smiling--woman.png';
import { FaInstagram } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaLinkedinIn,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
          LAISSE-MOI <span className={s.purple}> ME PRÉSENTER </span>{' '}
          MOI-MÊME
          </h1>

          <div className={s.description}>
            <p>
              Je suis développeuse web avec une <b> solide expérience </b>
              dans le développement de sites web et d'applications
            </p> 

            <p>
            Mes compétences incluent une maîtrise de{' '}
              <i>
                <b className={s.purple}>
                HTML, CSS, JavaScript, PHP, WordPress
                </b>
              </i>
              <br />
              et d'autres technologies pertinentes. 
              J'ai également de l'expérience dans le développement de solutions personnalisées <br />
              l'intégration de plugins pour WordPress et l'optimisation de la performance des sites web.
            </p>

            <p>
            Mon approche axée sur les résultats me permet 
            <i>
                <b className={s.purple}> d'adapter les projets </b>
              </i>
            aux besoins spécifiques de mes clients.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>TROUVEZ-MOI SUR</h1>
        <p>
          N'hésitez pas à me <span className={s.purple}>contacter </span>

        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/fati.mardi22"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/fati.mardi.106"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
        
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/fatima-ezzahra-mardi-730315258/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
