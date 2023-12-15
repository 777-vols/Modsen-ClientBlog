import { authorsArray } from '@/constants/Authors';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import AuthorCard from './AuthorCard';
import styles from './styles.module.scss';

const { wrapper, title, authors } = styles;

const AuthorsList = async ({ locale }: ILocaleProps) => {
  const { authorsList } = await getDictionary(locale);
  const { titleText } = authorsList;

  return (
    <section className={wrapper}>
      <h3 className={title}>{titleText}</h3>
      <div className={authors}>
        {authorsArray.map((authorData) => (
          <AuthorCard key={authorData.id} locale={locale} authorData={authorData} />
        ))}
      </div>
    </section>
  );
};

export default AuthorsList;
