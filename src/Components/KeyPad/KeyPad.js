import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './styles.module.scss';

const KeyPad = ({ onButtonClick, onClosePad }) => {
	return (
		<OutsideClickHandler
			onOutsideClick={() => {
				onClosePad();
			}}
		>
			<div className={styles.keyPadWrapper}>
				{[ ...Array(9).keys() ].map((idx) =>  {
          return <button key={idx} onClick={() => onButtonClick(`${idx + 1}`)}>{idx + 1}</button>
        })}
				<button onClick={() => onButtonClick('<-')}>{'<-'}</button>
        <button onClick={() => onButtonClick(`0`)}>0</button>
				<button onClick={() => onButtonClick('OK')}>{'OK'}</button>
			</div>
		</OutsideClickHandler>
	);
};

export default KeyPad;
