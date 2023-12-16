'use client';

import { FC, Fragment, Suspense } from 'react';
import { v4 } from 'uuid';

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
import { useInfinityScroll } from '@/hooks/useInfiniteScroll';

import Loading from './loading';

const Home: FC<ILocaleParams> = ({ params: { locale } }) => {
  const pageBlocks = [
    <HomeHero key={v4()} locale={locale} />,
    <Posts key={v4()} locale={locale} />,
    <AboutUs key={v4()} locale={locale} />,
    <ChooseCategory key={v4()} locale={locale} />,
    <WhyWeStarted key={v4()} locale={locale} />,
    <AuthorsList key={v4()} locale={locale} />,
    <LogoList key={v4()} />,
    <Testimonials key={v4()} locale={locale} />,
    <JoinOurTeam key={v4()} locale={locale} />,
  ];

  const infinityScrollBlocks = useInfinityScroll(pageBlocks);

  return (
    <main>
      <Suspense fallback={<Loading />}>
        {infinityScrollBlocks.map((block) => (
          <Fragment key={v4()}>{block}</Fragment>
        ))}
      </Suspense>
    </main>
  );
};

export default Home;
