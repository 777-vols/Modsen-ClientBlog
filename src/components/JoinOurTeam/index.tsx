import Link from 'next/link';

import { urls } from '@/constants';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { contactUs } = urls;

const { wrapper, content, title, description, joinUsLink } = styles;

const JoinOurTeam = ({ locale }: ILocaleProps) => {
  const { joinOurTeam } = getDictionary(locale);
  const { titleText, descriptionText, buttonText } = joinOurTeam;

  return (
    <section className={wrapper}>
      <div className={content}>
        <h2 className={title}>{titleText}</h2>
        <p className={description}>{descriptionText}</p>
        <Link className={joinUsLink} href={`/${locale}${contactUs}`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};
export default JoinOurTeam;
