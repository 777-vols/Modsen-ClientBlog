import { Navbar } from '@/components';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';

const { wrapper, container } = styles;

const LayoutNavbar = async ({ locale }: ILocaleProps) => {
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
