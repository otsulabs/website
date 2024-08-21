import CraftSection from './sections/Craft';
import MainSection from './sections/Main';
import TeamSection from './sections/Team';
import img from './assets/img/img.jpg';

const AboutPage = () => {
  return (
    <>
      <MainSection />
      <TeamSection img={img} />
      <CraftSection />
    </>
  );
};

export default AboutPage;
