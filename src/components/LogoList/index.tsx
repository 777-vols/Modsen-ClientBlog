import { v4 } from 'uuid';

import { logos } from '@/constants';

import styles from './styles.module.scss';

const LogoList = () => (
  <section className={styles.wrapper}>
    <div className={styles.logoslist}>
      {logos.map(({ icon }) => (
        <div className={styles.logoWrapper} key={v4()}>
          {icon}
        </div>
      ))}
    </div>
  </section>
);

export default LogoList;
