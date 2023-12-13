import { HomeHero, JoinOurTeam } from '@/components';

const Home = ({ params: { locale } }: ILocaleParams) => {
  return (
    <main>
      <HomeHero locale={locale} />
      <JoinOurTeam locale={locale} />
    </main>
  );
};

export default Home;
