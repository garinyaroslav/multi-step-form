import React from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { nextPage, prevPage } from '../../redux/appSlice';

import styles from './Plan.module.scss';

export const Plan: React.FC = () => {
  const dispatch = useAppDispatch();

  const onClickNext = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    dispatch(nextPage());
  };

  const onClickBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    dispatch(prevPage());
  };

  return (
    <div className={styles.root}>
      <h2>Select your plan</h2>
      <span className={styles.clue}>You have the option of monthly or yearly billing.</span>
      <div className={styles.plans}>
        <div className={`${styles.plan} ${styles.selected}`}>
          <img src="/img/icon-arcade.svg" alt="arcade" />
          <h3>Arcade</h3>
          <span>$9/mo</span>
        </div>
        <div className={styles.plan}>
          <img src="/img/icon-advanced.svg" alt="arcade" />
          <h3>Advanced</h3>
          <span>$12/mo</span>
        </div>
        <div className={styles.plan}>
          <img src="/img/icon-pro.svg" alt="arcade" />
          <h3>Pro</h3>
          <span>$15/mo</span>
        </div>
      </div>
      <div className={styles.selector}>
        <div className={styles.selectorBody}>
          <span>Monthly</span>
          <div className={styles.switch}>
            <div className={styles.circle}></div>
          </div>
          <span>Yearly</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={(event) => onClickBack(event)} className={styles.back}>
          Go Back
        </button>
        <button onClick={(event) => onClickNext(event)} className={styles.next}>
          Next Step
        </button>
      </div>
    </div>
  );
};
