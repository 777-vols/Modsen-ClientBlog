import { getDictionary } from '@/i18n/getDictionary';

import Category from './Category';
import styles from './styles.module.scss';
import { IProps, TypeCategoryKey } from './types';

const Categories = ({ titleText, locale }: IProps) => {
  const { category } = getDictionary(locale);
  const { categoriesList } = category;

  const categoriesComponents = Object.keys(categoriesList).map((categoryKey) => (
    <Category key={categoryKey} locale={locale} categoryKey={categoryKey as TypeCategoryKey} />
  ));

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{titleText}</h2>
      <div className={styles.categories}>{categoriesComponents}</div>
    </section>
  );
};

export default Categories;
