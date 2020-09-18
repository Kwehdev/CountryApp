import React from 'react';

import styles from './TableCell.module.css';

type TableCellProps = {
	children: React.ReactNode;
	type: string;
};

type MapTypeToStyle = {
	[key: string]: string;
};
const mapTypeToStyle: MapTypeToStyle = {
	flag: styles.Cell_flag,
	name: styles.Cell_name,
	population: styles.Cell_population,
	languages: styles.Cell_languages,
	region: styles.Cell_region,
};

export default function TableCell({ children, type }: TableCellProps) {
	const StyleType = mapTypeToStyle[type];
	console.log(StyleType);
	return (
		<td className={StyleType}>
			<div className={styles.Wrapper}>{children}</div>
		</td>
	);
}
