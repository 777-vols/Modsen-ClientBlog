import { Navbar } from '@/components';
import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, container } = styles;

const LayoutNavbar = async ({ locale }: IProps) => {
  const { navbar } = await getDictionary(locale);

  return (
    <header className={wrapper}>
      <div className={container}>
        <Navbar navbar={navbar} locale={locale} />
      </div>
    </header>
  );
};

export default LayoutNavbar;
