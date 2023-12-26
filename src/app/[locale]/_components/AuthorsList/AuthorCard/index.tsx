import Image from 'next/image';
import Link from 'next/link';

import { socials, urls } from '@/constants';
import { rgbDataURL } from '@/helpers';

import styles from './styles.module.scss';
import { IProps } from './types';

const socialIconSize = 16;

const { author: authorPageUrl } = urls;

const AuthorCard = ({ locale, authorData }: IProps) => {
  const { image, name, jobTitle, company, id } = authorData;

  return (
    <div className={styles.wrapper}>
      <Link data-cy="authorLink" href={`/${locale}${authorPageUrl}/${id}`}>
        <div className={styles.avatar}>
          <Image
            src={image}
            alt="avatar"
            placeholder="blur"
            blurDataURL={rgbDataURL()}
            fill
            priority
          />
        </div>
        <h3 className={styles.fullName}>{name}</h3>
        <span className={styles.info}>
          {jobTitle} {company}
        </span>
      </Link>
      <div className={styles.socialsWrapper}>
        {socials.map(({ icon, href }) => (
          <Link className={styles.socialLink} key={href} href={href}>
            <Image
              src={icon}
              alt="social-icon"
              placeholder="blur"
              blurDataURL={rgbDataURL()}
              width={socialIconSize}
              height={socialIconSize}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorCard;
