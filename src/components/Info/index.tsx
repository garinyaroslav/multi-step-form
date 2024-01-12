import React from 'react';
import { useForm } from 'react-hook-form';

import { PersonalInfo } from '../../redux/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { nextPage, addInfo } from '../../redux/appSlice';

import styles from './Info.module.scss';

export const Info: React.FC = () => {
  const dispatch = useAppDispatch();
  const { personalInfo } = useAppSelector((state) => state.app);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: personalInfo.fullName,
      email: personalInfo.email,
      phoneNumber: personalInfo.phoneNumber,
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: PersonalInfo) => {
    dispatch(addInfo(data));
    dispatch(nextPage());
  };

  return (
    <div className={styles.root}>
      <h2>Personal info</h2>
      <span className={styles.clue}>
        Please provide your name, email address, and phone number.
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <div className={styles.info}>
            <span className={styles.title}>Name</span>
            <div className={styles.alert}>{errors?.fullName && errors?.fullName?.message}</div>
          </div>
          <input
            {...register('fullName', { required: 'This fiels is required' })}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className={styles.input}>
          <div className={styles.info}>
            <span className={styles.title}>Email Address</span>
            <div className={styles.alert}>{errors?.email && errors?.email?.message}</div>
          </div>
          <input
            {...register('email', { required: 'This fiels is required' })}
            placeholder="e.g. stephenking@lorem.com"
            type="email"
          />
        </div>
        <div className={styles.input}>
          <div className={styles.info}>
            <span className={styles.title}>Phone Number</span>
            <div className={styles.alert}>
              {errors?.phoneNumber && errors?.phoneNumber?.message}
            </div>
          </div>
          <input
            {...register('phoneNumber', {
              required: 'This fiels is required',
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im,
                message: 'Phone number is invalid',
              },
            })}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <button type="submit" disabled={!isValid}>
          Next Step
        </button>
      </form>
    </div>
  );
};
