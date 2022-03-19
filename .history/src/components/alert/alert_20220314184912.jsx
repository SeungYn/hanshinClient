import React from 'react';
import styles from './alert.module.css';

const alert = ({text, isAlert }) => (
	<>
		{text && <p className={`${styles.banner} ${isAlert ? ${styles.banner_red} : ${styles.ad}}`}></p>}
	</>
	);

export default alert;