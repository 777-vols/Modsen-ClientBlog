import { FC, Suspense } from 'react';

import Loading from '@/app/[locale]/loading';
import { ChooseCategory, JoinOurTeam } from '@/components';

import { AllPosts, FeaturedPost } from './_components';

const Blog: FC<ILocaleParams> = ({ params: { locale } }) => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <FeaturedPost locale={locale} />
        <AllPosts locale={locale} />
        <ChooseCategory locale={locale} />
        <JoinOurTeam locale={locale} />
      </main>
    </Suspense>
  );
};

export default Blog;
