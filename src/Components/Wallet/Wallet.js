import React from 'react';

import OneLeu from '../../img/1leu.jpg';
import FiveLei from '../../img/5lei.jpg';
import TenLei from '../../img/10lei.jpg';
import FiftyBani from '../../img/50bani.jpg';

import styles from './styles.module.scss';

const Wallet = ({onClickMoney}) => {
  return (
    <div className={styles.walletWrapper}>
      <img onClick={() => onClickMoney(1)} src={OneLeu}></img>
      <img onClick={() => onClickMoney(5)} src={FiveLei}></img>
      <img onClick={() => onClickMoney(10)} src={TenLei}></img>
      <img onClick={() => onClickMoney(0.5)} src={FiftyBani}></img>
    </div>
  );
};

export default Wallet;