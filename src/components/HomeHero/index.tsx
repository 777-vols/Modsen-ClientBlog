import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const {
  wrapper,
  container,
  content,
  subtitle,
  title,
  info,
  description,
  readMoreButton,
  authorName,
} = styles;

const HomeHero = ({ locale }: ILocaleProps) => {
  const { homeHero } = getDictionary(locale);
  const { titleText, subtitleText, infoText, descriptionText, buttonText } = homeHero;

  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={content}>
          <h5 className={subtitle}>
            {subtitleText[0]}
            <b>{subtitleText[1]}</b>
          </h5>
          <h1 className={title}>{titleText}</h1>
          <span className={info}>
            {infoText[0]}
            <span className={authorName}>{infoText[1]}</span>
            {infoText[2]}
          </span>
          <p className={description}>{descriptionText}</p>
          <button className={readMoreButton} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
