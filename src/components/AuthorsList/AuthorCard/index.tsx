import Link from 'next/link';

import { socials } from '@/constants';

import styles from './styles.module.scss';
import { IProps } from './types';

const AuthorCard = ({ locale, authorData }: IProps) => {
  const { image, name, jobTitle, company } = authorData;

  return (
    <div className={styles.wrapper}>
      <Link href={`/${locale}`}>
        <div className={styles.avatar}>{image}</div>
        <h3 className={styles.fullName}>{name}</h3>
        <span className={styles.info}>
          {jobTitle} {company}
        </span>
      </Link>
      <div className={styles.socialsWrapper}>
        {socials.map(({ icon, href }) => (
          <Link className={styles.socialLink} key={href} href={href}>
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorCard;
