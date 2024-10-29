import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
      Bonjour à tous, je suis{' '}
        <span className={s.purple}>Fatima-Ezzahra Mardi, </span>
        <br />développeuse web actuellement basée au Maroc{' '}
        <span className={s.purple}>Casablanca, Maroc.</span>
        <br />
        <br />
        J'ai obtenu mon baccalauréat en 2020 et 
        <br />
        suivi d'une formation en développement informatique au centre OFPPT. 
        Actuellement, je poursuis une licence professionnelle en développement web et mobile.
        <br />
        <br />
        En dehors du codage, j'aime pratiquer la
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Natation
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Voyager 
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Boxe 
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
