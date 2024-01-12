import styles from './Wrapper.module.scss';

export const Wrapper = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.root}>{children}</div>;
};
