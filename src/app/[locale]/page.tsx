import { AboutUs, HomeHero, JoinOurTeam, WhyWeStarted } from '@/components';

const Home = ({ params: { locale } }: ILocaleParams) => {
  return (
    <main>
      <HomeHero locale={locale} />
      <AboutUs locale={locale} />
      <WhyWeStarted locale={locale} />
      <JoinOurTeam locale={locale} />
    </main>
  );
};

export default Home;
