import { logos } from '@/constants';

import styles from './styles.module.scss';

const LogoList = () => (
  <section className={styles.wrapper}>
    <div className={styles.logoslist}>
      {logos.map(({ id, icon }) => (
        <div className={styles.logoWrapper} key={id}>
          {icon}
        </div>
      ))}
    </div>
  </section>
);

export default LogoList;
