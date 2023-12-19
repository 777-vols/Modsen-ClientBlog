import { Navbar } from '@/components';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const LayoutNavbar = ({ locale }: ILocaleProps) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Navbar locale={locale} />
      </div>
    </header>
  );
};

export default LayoutNavbar;
