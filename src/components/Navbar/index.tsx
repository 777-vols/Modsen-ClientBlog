import Link from 'next/link';

import { getLinks } from '@/helpers/getLinks';
import { getDictionary } from '@/lib/getDictionary';

import styles from './styles.module.scss';
import { IProps } from './types';

const { wrapper, container, headerTitle, navbar } = styles;

const Navbar = async ({ locale, linksNames }: IProps) => {
  const { title } = await getDictionary(locale);
  const linksList = getLinks(locale, linksNames).map(({ name, path }) => (
    <li key={path}>
      <Link href={path}>{name}</Link>
    </li>
  ));

  return (
    <header className={wrapper}>
      <div className={container}>
        <h4 className={headerTitle}>{title}</h4>
        <nav className={navbar}>
          <ul>{linksList}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
