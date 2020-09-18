import React from 'react';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

import styles from './CountryTable.module.css';

export default function CountryTable() {
	return (
		<div className={styles.Container}>
			<table className={styles.Table}>
				<TableHeader />
				<TableBody />
			</table>
		</div>
	);
}
