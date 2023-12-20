'use client';

import { FC, Suspense } from 'react';

import { Categories, InfinityScroll, JoinOurTeam } from '@/components';
import { getDictionary } from '@/i18n/getDictionary';

import {
  AboutUs,
  AuthorsList,
  HomeHero,
  LogoList,
  Posts,
  Testimonials,
  WhyWeStarted,
} from './_components';
import Loading from './loading';

const Home: FC<ILocaleParams> = ({ params: { locale } }) => {
  const { category } = getDictionary(locale);
  const { homeTitleText } = category;

  return (
    <Suspense fallback={<Loading />}>
      <InfinityScroll wrapper={<main id="rootMain" />}>
        <HomeHero locale={locale} />
        <Posts locale={locale} />
        <AboutUs locale={locale} />
        <Categories locale={locale} titleText={homeTitleText} />
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
