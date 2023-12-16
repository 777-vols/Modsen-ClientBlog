import { v4 } from 'uuid';

import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import Category from './Category';
import styles from './styles.module.scss';
import { TypeCategoryKey } from './types';

const { wrapper, categories, title } = styles;

const ChooseCategory = ({ locale }: ILocaleProps) => {
  const { category } = getDictionary(locale);
  const { titleText, categoriesList } = category;

  const categoriesComponents = Object.keys(categoriesList).map((categoryKey) => (
    <Category key={v4()} locale={locale} categoryKey={categoryKey as TypeCategoryKey} />
  ));

  return (
    <section className={wrapper}>
      <h3 className={title}>{titleText}</h3>
      <div className={categories}>{categoriesComponents}</div>
    </section>
  );
};

export default ChooseCategory;
