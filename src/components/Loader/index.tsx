import styles from './styles.module.scss';

const { wrapper, spinner } = styles;

export const Loader = () => {
  return (
    <div className={wrapper}>
      <span className={spinner} />
    </div>
  );
};
