import Link from 'next/link';

import { urls } from '@/constants/urls';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { contactUs } = urls;

const { wrapper, content, title, description, joinUsButton } = styles;

const JoinOurTeam = async ({ locale }: ILocaleProps) => {
  const { joinOurTeam } = await getDictionary(locale);
  const { titleText, descriptionText, buttonText } = joinOurTeam;

  return (
    <section className={wrapper}>
      <div className={content}>
        <h3 className={title}>{titleText}</h3>
        <span className={description}>{descriptionText}</span>
        <Link className={joinUsButton} href={`/${locale}${contactUs}`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};
export default JoinOurTeam;
