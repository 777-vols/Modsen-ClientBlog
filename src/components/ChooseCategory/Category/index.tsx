import Link from 'next/link';

import { allImages } from '@/constants/allImages';
import { urls } from '@/constants/urls';
import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { category } = urls;

const { categoryImages } = allImages;

const { wrapper, title, description, imageWrapper } = styles;

const Category = async ({ categoryKey, locale }: IProps) => {
  const { category: categoryData } = await getDictionary(locale);
  const { categoriesList } = categoryData;
  const { titleText, descriptionText } = categoriesList[categoryKey];

  return (
    <Link href={`/${locale}${category}`}>
      <div className={wrapper}>
        <div className={imageWrapper}>{categoryImages[categoryKey]}</div>
        <h3 className={title}>{titleText}</h3>
        <p className={description}>{descriptionText}</p>
      </div>
    </Link>
  );
};

export default Category;
