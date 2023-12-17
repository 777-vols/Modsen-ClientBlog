import { v4 } from 'uuid';

import { logos } from '@/constants';

import styles from './styles.module.scss';

const { wrapper, logoslist, logoWrapper } = styles;

const LogoList = () => (
  <section className={wrapper}>
    <div className={logoslist}>
      {logos.map(({ icon }) => (
        <div className={logoWrapper} key={v4()}>
          {icon}
        </div>
      ))}
    </div>
  </section>
);

export default LogoList;
