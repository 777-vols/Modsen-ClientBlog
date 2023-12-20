import styles from './styles.module.scss';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.spinner} />
    </div>
  );
};
