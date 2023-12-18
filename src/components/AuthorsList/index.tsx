import dynamic from 'next/dynamic';

import Loading from '@/app/[locale]/loading';
import { allAuthors } from '@/constants/Authors';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { wrapper, title, authors } = styles;

const LazyLoadAuthorCard = dynamic(() => import('./AuthorCard'), {
  loading: () => <Loading />,
});

const AuthorsList = ({ locale }: ILocaleProps) => {
  const { authorsList } = getDictionary(locale);
  const { titleText } = authorsList;

  const authorsArray = allAuthors.slice(0, 4);

  return (
    <section className={wrapper}>
      <h2 className={title}>{titleText}</h2>
      <div className={authors}>
        {authorsArray.map((authorData) => (
          <LazyLoadAuthorCard key={authorData.id} locale={locale} authorData={authorData} />
        ))}
      </div>
    </section>
  );
};

export default AuthorsList;
