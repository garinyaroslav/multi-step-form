import React from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { nextPage, prevPage } from '../../redux/appSlice';

import styles from './AddOns.module.scss';

export const AddOns: React.FC = () => {
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
      <h2 className={styles.title}>Pick add-ons</h2>
      <span className={styles.clue}>Add-ons help enhance your gaming experience.</span>
      <div className={styles.options}>
        <div className={styles.option}>
          <input type="checkbox" />
          <div className={styles.text}>
            <h2>Online service</h2>
            <span>Access to multiplayer</span>
          </div>
          <span className={styles.price}>+$1/mo</span>
        </div>
        <div className={styles.option}>
          <input type="checkbox" />
          <div className={styles.text}>
            <h2>Larger storage</h2>
            <span>Extra 1TB of cloud save</span>
          </div>
          <span className={styles.price}>+$2/mo</span>
        </div>
        <div className={styles.option}>
          <input type="checkbox" />
          <div className={styles.text}>
            <h2>Customizable profile</h2>
            <span>Custom theme on your profile</span>
          </div>
          <span className={styles.price}>+$3/mo</span>
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
