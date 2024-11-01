import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
            APPRENEZ À <b className={s.purple}>ME CONNAÎTRE</b>
            </h1>
            <AboutTextCard />
          </div>

        </div>

        <h2 className={s.skills}>
        Compétences <b className={s.purple}>Professionnelles</b>
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
        Jours où je <b className={s.purple}>Code</b>
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
