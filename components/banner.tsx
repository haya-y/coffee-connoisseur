import React from 'react';
import styles from './banner.module.css';

type Props = {
  buttonText: string;
  handleOnClick: () => void;
};

export const Banner = (props: Props) => {
  const { buttonText, handleOnClick } = props;
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.title1}>Coffee </span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops</p>
      <button className={styles.button} onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  );
};
