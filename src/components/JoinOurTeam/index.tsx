import Link from 'next/link';

import { urls } from '@/constants';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { contactUs } = urls;

const JoinOurTeam = ({ locale }: ILocaleProps) => {
  const { joinOurTeam } = getDictionary(locale);
  const { titleText, descriptionText, buttonText } = joinOurTeam;

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>{titleText}</h2>
        <p className={styles.description}>{descriptionText}</p>
        <Link className={styles.joinUsLink} href={`/${locale}${contactUs}`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};
export default JoinOurTeam;
