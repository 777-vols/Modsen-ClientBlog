import {
  AboutUs,
  ChooseCategory,
  HomeHero,
  JoinOurTeam,
  LogoList,
  Posts,
  WhyWeStarted,
} from '@/components';

const Home = ({ params: { locale } }: ILocaleParams) => {
  return (
    <main>
      <HomeHero locale={locale} />
      <Posts locale={locale} />
      <AboutUs locale={locale} />
      <ChooseCategory locale={locale} />
      <WhyWeStarted locale={locale} />
      <LogoList />
      <JoinOurTeam locale={locale} />
    </main>
  );
};

export default Home;
