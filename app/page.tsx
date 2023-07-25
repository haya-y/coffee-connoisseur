'use client';

import styles from './page.module.css';
import { Banner } from '../components/banner';

export default function Home() {
  const handleOnBannerBtnClick = async () => {
    console.log('hi banner button');
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner buttonText='View stores nearby' handleOnClick={handleOnBannerBtnClick} />
      </main>
    </div>
  );
}
