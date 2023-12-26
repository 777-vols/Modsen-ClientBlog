import dynamic from 'next/dynamic';

import Loading from '@/app/[locale]/loading';
import { allAuthors } from '@/constants/authors';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const numberOfPosts = 4;

const LazyLoadAuthorCard = dynamic(() => import('./AuthorCard'), {
  loading: () => <Loading />,
});

const AuthorsList = ({ locale }: ILocaleProps) => {
  const { authorsList } = getDictionary(locale);
  const { titleText } = authorsList;

  const authorsArray = allAuthors.slice(0, numberOfPosts);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{titleText}</h2>
      <div data-cy="authorsList" className={styles.authors}>
        {authorsArray.map((authorData) => (
          <LazyLoadAuthorCard key={authorData.id} locale={locale} authorData={authorData} />
        ))}
      </div>
    </section>
  );
};

export default AuthorsList;
