import React from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { nextPage, prevPage } from '../../redux/appSlice';

import styles from './Summary.module.scss';

export const Summary: React.FC = () => {
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
      <h2>Finishing up</h2>
      <span className={styles.clue}>Double-check everything looks OK before confirming.</span>
      <div className={styles.list}>
        <div className={`${styles.botBorder} ${styles.plan}`}>
          <div>
            <h3>Arcade (Monthly)</h3>
            <span>Change</span>
          </div>
          <span className={styles.price}>$9/mo</span>
        </div>
        <div className={styles.addit}>
          <span className={styles.name}>Online service</span>
          <span className={styles.addPrice}>+$1/mo</span>
        </div>
        <div className={styles.addit}>
          <span className={styles.name}>Larger storage</span>
          <span className={styles.addPrice}>+$2/mo</span>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <span className={styles.name}>Total (per month)</span>
        <span className={styles.addPrice}>+$12/mo</span>
      </div>
      <div className={styles.buttons}>
        <button onClick={(event) => onClickBack(event)} className={styles.back}>
          Go Back
        </button>
        <button onClick={(event) => onClickNext(event)} className={styles.next}>
          Confirm
        </button>
      </div>
    </div>
  );
};
