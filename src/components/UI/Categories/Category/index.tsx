import Image from 'next/image';
import Link from 'next/link';

import { allImages, urls } from '@/constants';
import { getDictionary } from '@/i18n/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { category } = urls;

const { categoryImages } = allImages;

const defaultImageSize = 48;
const startupImageSize = 23;

const Category = ({ categoryKey, locale }: IProps) => {
  const imageSize = categoryKey === 'startup' ? startupImageSize : defaultImageSize;

  const { category: categoryData } = getDictionary(locale);
  const { categoriesList } = categoryData;
  const { titleText, descriptionText } = categoriesList[categoryKey];

  return (
    <Link href={`/${locale}${category}/${titleText.toLocaleLowerCase()}`}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={categoryImages[categoryKey]}
              alt="category"
              height={imageSize}
              width={imageSize}
            />
          </div>
          <h3 className={styles.title}>{titleText}</h3>
        </div>
        <p className={styles.description}>{descriptionText}</p>
      </div>
    </Link>
  );
};

export default Category;
