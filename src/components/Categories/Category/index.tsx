import Link from 'next/link';

import { allImages, urls } from '@/constants';
import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { category } = urls;

const { categoryImages } = allImages;

const Category = ({ categoryKey, locale }: IProps) => {
  const { category: categoryData } = getDictionary(locale);
  const { categoriesList } = categoryData;
  const { titleText, descriptionText } = categoriesList[categoryKey];

  return (
    <Link href={`/${locale}${category}/${titleText.toLocaleLowerCase()}`}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>{categoryImages[categoryKey]}</div>
          <h3 className={styles.title}>{titleText}</h3>
        </div>
        <p className={styles.description}>{descriptionText}</p>
      </div>
    </Link>
  );
};

export default Category;
