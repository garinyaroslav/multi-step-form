import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

import styles from './Sidebar.module.scss';

export const Sidebar: React.FC = () => {
  const { page } = useAppSelector((state: RootState) => state.app);

  return (
    <nav className={styles.root}>
      <img src="/img/bg-sidebar-desktop.svg" />
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles.digit} ${page === 1 ? styles.active : ''}`}>1</div>
          <div className={styles.info}>
            <span>STEP 1</span>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles.digit} ${page === 2 ? styles.active : ''}`}>2</div>
          <div className={styles.info}>
            <span>STEP 2</span>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles.digit} ${page === 3 ? styles.active : ''}`}>3</div>
          <div className={styles.info}>
            <span>STEP 3</span>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles.digit} ${page === 4 || page === 5 ? styles.active : ''}`}>
            4
          </div>
          <div className={styles.info}>
            <span>STEP 4</span>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
