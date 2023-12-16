import {
  AboutUs,
  AuthorsList,
  ChooseCategory,
  HomeHero,
  JoinOurTeam,
  LogoList,
  Posts,
  Testimonials,
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
      <AuthorsList locale={locale} />
      <LogoList />
      <Testimonials locale={locale} />
      <JoinOurTeam locale={locale} />
    </main>
  );
};

export default Home;
