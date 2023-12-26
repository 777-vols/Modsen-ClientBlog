'use client';

import styles from './styles.module.scss';

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>
          <div className={styles.errorBanner} />
        </div>
      </body>
    </html>
  );
}
