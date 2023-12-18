import Link from 'next/link';
import { v4 } from 'uuid';

import { socials } from '@/constants';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, avatar, socialLink, fullName, info, socialsWrapper } = styles;

const AuthorCard = ({ locale, authorData }: IProps) => {
  const { image, name, jobTitle, company } = authorData;

  return (
    <div className={wrapper}>
      <Link href={`/${locale}`}>
        <div className={avatar}>{image}</div>
        <h3 className={fullName}>{name}</h3>
        <span className={info}>
          {jobTitle} {company}
        </span>
      </Link>
      <div className={socialsWrapper}>
        {socials.map(({ icon, href }) => (
          <Link className={socialLink} key={v4()} href={href}>
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorCard;
