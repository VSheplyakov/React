import React from 'react';
import './Info.css';
import styles from './Info.module.css';

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello form Info component</h1>
      <h2>Headin in the Info component</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className={styles.myOtherButton}>Button whith local CSS styles</button>
    </div>
  );
}

export default Info;
