import { Navbar } from '@/components';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { wrapper, container } = styles;

const LayoutNavbar = ({ locale }: ILocaleProps) => {
  return (
    <header className={wrapper}>
      <div className={container}>
        <Navbar locale={locale} />
      </div>
    </header>
  );
};

export default LayoutNavbar;
