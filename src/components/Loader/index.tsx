import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.spinner} />
    </div>
  );
};

export default Loader;
