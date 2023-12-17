import { FC, Suspense } from 'react';

import Loading from '@/app/[locale]/loading';
import { JoinOurTeam } from '@/components';

const BlogPost: FC<ILocaleParams> = ({ params: { locale } }) => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <h1>BlogPost</h1>
        <JoinOurTeam locale={locale} />
      </main>
    </Suspense>
  );
};

export default BlogPost;
