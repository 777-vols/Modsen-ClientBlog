'use client';

import { FC } from 'react';

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

const Home: FC<ILocaleParams> = ({ params: { locale } }) => {
  const { category } = getDictionary(locale);
  const { homeTitleText } = category;

  return (
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
  );
};

export default Home;
