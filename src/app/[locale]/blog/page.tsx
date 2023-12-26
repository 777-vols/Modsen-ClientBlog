import { Categories, JoinOurTeam } from '@/components';
import { getDictionary } from '@/i18n/getDictionary';

import { AllPosts, FeaturedPost } from './_components';

const Blog = ({ params: { locale } }: ILocaleParams) => {
  const { category } = getDictionary(locale);
  const { blogTitleText } = category;

  return (
    <main>
      <FeaturedPost locale={locale} />
      <AllPosts locale={locale} />
      <Categories locale={locale} titleText={blogTitleText} />
      <JoinOurTeam locale={locale} />
    </main>
  );
};

export default Blog;
