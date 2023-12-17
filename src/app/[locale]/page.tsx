'use client';

import { FC, Suspense } from 'react';

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
import InfinityScroll from '@/components/InfinityScroll';

import Loading from './loading';

const Home: FC<ILocaleParams> = ({ params: { locale } }) => {
  return (
    <Suspense fallback={<Loading />}>
      <InfinityScroll wrapper={<main id="rootMain" />}>
        <HomeHero locale={locale} />
        <Posts locale={locale} />
        <AboutUs locale={locale} />
        <ChooseCategory locale={locale} />
        <WhyWeStarted locale={locale} />
        <AuthorsList locale={locale} />
        <LogoList />
        <Testimonials locale={locale} />
        <JoinOurTeam locale={locale} />
      </InfinityScroll>
    </Suspense>
  );
};

export default Home;
