import React from 'react';
import styles from './styles.module.scss';

const KeyPad = ({onCombinationEnter}) => {
  return (
    <div className={styles.keyPadWrapper}>
       {[...Array(9).keys()].map(idx => 
        <button>{idx+1}</button>
       )}
       <button>{"<-"}</button>
       <button>{"OK"}</button>
    </div>
  );
};

export default KeyPad;