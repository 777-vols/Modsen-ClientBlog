import styles from './styles.module.scss';
import { IProps } from './types';

const Container = ({ children }: IProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
