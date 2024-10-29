import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiMongodb,
  DiCss3,
  DiJava,
  DiScrum,
} from 'react-icons/di';
import {
  SiPhp,
  SiWordpress,
  SiMysql,
  SiGithub,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiPhp />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <SiWordpress />
      </li>
      <li className={s.techIcon}>
        <SiMysql />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <SiGithub />
      </li>
      <li className={s.techIcon}>
        <DiScrum />
      </li>
    
      
    </ul>
  );
};

export default TechSkills;
