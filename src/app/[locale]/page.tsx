import { AboutUs, HomeHero, JoinOurTeam, LogoList, WhyWeStarted } from '@/components';

const Home = ({ params: { locale } }: ILocaleParams) => {
  return (
    <main>
      <HomeHero locale={locale} />
      <AboutUs locale={locale} />
      <WhyWeStarted locale={locale} />
      <LogoList />
      <JoinOurTeam locale={locale} />
    </main>
  );
};

export default Home;
