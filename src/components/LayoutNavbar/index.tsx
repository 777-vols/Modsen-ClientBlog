import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, container, headerTitle, navbar } = styles;

const LayoutNavbar = async ({ locale }: IProps) => {
  const { title } = await getDictionary(locale);
  return (
    <header className={wrapper}>
      <div className={container}>
        <h4 className={headerTitle}>{title}</h4>
        <nav className={navbar} />
      </div>
    </header>
  );
};

export default LayoutNavbar;
