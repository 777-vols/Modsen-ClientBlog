'use client';

import { FC, Suspense, useMemo } from 'react';

import Loading from '@/app/[locale]/loading';
import { JoinOurTeam } from '@/components';
import { allPosts } from '@/constants/posts';

import CurrentPost from './_components/CurrentPost';
import WhatReadNext from './_components/WhatReadNext';
import { TypeProps } from './types';

const BlogPost: FC<TypeProps> = ({ params: { locale, id } }) => {
  const currentPostData = useMemo(
    () => allPosts.filter((post) => Number(post.id) === Number(id))[0],
    [id],
  );

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <CurrentPost locale={locale} postData={currentPostData} />
        <WhatReadNext locale={locale} postData={currentPostData} />
        <JoinOurTeam locale={locale} />
      </main>
    </Suspense>
  );
};

export default BlogPost;
