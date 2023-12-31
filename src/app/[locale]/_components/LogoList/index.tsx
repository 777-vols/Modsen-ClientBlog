import Image from 'next/image';

import { logos } from '@/constants';
import { rgbDataURL } from '@/helpers';

import styles from './styles.module.scss';

const LogoList = () => (
  <section className={styles.wrapper}>
    <div className={styles.logoslist}>
      {logos.map(({ id, icon }) => (
        <div className={styles.logoWrapper} key={id}>
          <Image placeholder="blur" blurDataURL={rgbDataURL()} src={icon} alt="logo-icon" fill />
        </div>
      ))}
    </div>
  </section>
);

export default LogoList;
