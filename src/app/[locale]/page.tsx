import { HomeHero, JoinOurTeam } from '@/components';
import WhyWeStarted from '@/components/WhyWeStarted';

const Home = ({ params: { locale } }: ILocaleParams) => {
  return (
    <main>
      <HomeHero locale={locale} />
      <WhyWeStarted locale={locale} />
      <JoinOurTeam locale={locale} />
    </main>
  );
};

export default Home;
