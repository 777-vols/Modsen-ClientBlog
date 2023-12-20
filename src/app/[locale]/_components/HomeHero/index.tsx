import Link from 'next/link';

import { urls } from '@/constants';
import { homeHeroPost } from '@/constants/Posts';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const HomeHero = ({ locale }: ILocaleProps) => {
  const { homeHero } = getDictionary(locale);
  const { subtitleText, infoText, buttonText } = homeHero;
  const {
    id: postId,
    title: titleText,
    preview: previewText,
    createdDate: createdPostDate,
    authorName: authorNameText,
    authorId,
  } = homeHeroPost;

  const stringDate = getStringDate(createdPostDate);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>
            {subtitleText[0]}
            <b>{subtitleText[1]}</b>
          </span>
          <h1 className={styles.title}>{titleText}</h1>
          <span className={styles.info}>
            {infoText[0]}
            <Link href={`/${locale}${authorPageUrl}/${authorId}`} className={styles.authorNameLink}>
              {authorNameText}
            </Link>
            {` | ${stringDate}`}
          </span>
          <p className={styles.description}>{previewText}</p>
          <Link href={`/${locale}${blogPostPageUrl}/${postId}`} className={styles.readMoreLink}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
