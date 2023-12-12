import { Navbar } from '@/components';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, container } = styles;

const LayoutNavbar = ({ title, locale, linksNames }: IProps) => {
  return (
    <header className={wrapper}>
      <div className={container}>
        <Navbar title={title} locale={locale} linksNames={linksNames} />
      </div>
    </header>
  );
};

export default LayoutNavbar;
