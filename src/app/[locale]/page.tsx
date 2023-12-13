import { HomeHero } from '@/components';
import { getDictionary } from '@/lib/getDictionary';

const Home = async ({ params: { locale } }: IPageLocale) => {
  const { homeHero } = await getDictionary(locale);

  return (
    <main>
      <HomeHero homeHero={homeHero} locale={locale} />
    </main>
  );
};

export default Home;
