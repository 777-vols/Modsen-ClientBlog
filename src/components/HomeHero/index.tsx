import Link from 'next/link';

import { urls } from '@/constants';
import { homeHeroPost } from '@/constants/Posts';
import { getStringDate } from '@/helpers';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { author: authorPageUrl, blogPost: blogPostPageUrl } = urls;

const {
  wrapper,
  container,
  content,
  subtitle,
  title,
  info,
  description,
  authorNameLink,
  readMoreLink,
} = styles;

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
    <section className={wrapper}>
      <div className={container}>
        <div className={content}>
          <span className={subtitle}>
            {subtitleText[0]}
            <b>{subtitleText[1]}</b>
          </span>
          <h1 className={title}>{titleText}</h1>
          <span className={info}>
            {infoText[0]}
            <Link href={`/${locale}${authorPageUrl}/${authorId}`} className={authorNameLink}>
              {authorNameText}
            </Link>
            {` | ${stringDate}`}
          </span>
          <p className={description}>{previewText}</p>
          <Link href={`/${locale}${blogPostPageUrl}/${postId}`} className={readMoreLink}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
