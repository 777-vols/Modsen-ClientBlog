import { Suspense } from 'react';

import Loading from '@/app/[locale]/loading';
import { Categories, JoinOurTeam } from '@/components';
import { getDictionary } from '@/lib/getDictionary';

import { AllPosts, FeaturedPost } from './_components';

const Blog = ({ params: { locale } }: ILocaleParams) => {
  const { category } = getDictionary(locale);
  const { blogTitleText } = category;

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <FeaturedPost locale={locale} />
        <AllPosts locale={locale} />
        <Categories locale={locale} titleText={blogTitleText} />
        <JoinOurTeam locale={locale} />
      </main>
    </Suspense>
  );
};

export default Blog;
