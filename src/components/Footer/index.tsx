import styles from './styles.module.scss';

const { wrapper, container } = styles;

const Footer = () => {
  return (
    <footer className={wrapper}>
      <div className={container}>
        <h1>Footer</h1>
      </div>
    </footer>
  );
};

export default Footer;
