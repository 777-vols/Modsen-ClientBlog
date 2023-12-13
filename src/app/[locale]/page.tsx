import { HomeHero } from '@/components';

const Home = ({ params: { locale } }: IPageLocale) => {
  return (
    <main>
      <HomeHero locale={locale} />
    </main>
  );
};

export default Home;
