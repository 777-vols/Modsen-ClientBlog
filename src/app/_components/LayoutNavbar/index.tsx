import styles from './styles.module.scss';

const { wrapper, container, navbar } = styles;

const LayoutNavbar = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <nav className={navbar}>Navbar</nav>
      </div>
    </div>
  );
};

export default LayoutNavbar;
