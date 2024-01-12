import React from 'react';

import styles from './Thanking.module.scss';

export const Thanking: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src="/img/icon-thank-you.svg" alt="agree" />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you you have fun using our platform. If
          you ever need support, please feel free to email us at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};
