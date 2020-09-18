import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import FlagImage from '../FlagImage';
import TableCell from '../TableCell';

import styles from './TableRow.module.css';

type TableRowProps = {
	flag: string;
	name: string;
	population: number;
	languages: string[];
	region: string;
};

export default function TableRow({
	flag,
	name,
	population,
	languages,
	region,
}: TableRowProps) {
	const { secondaryColor } = useTypedSelector((state) => state.theme);
	return (
		<tr
			className={styles.Row}
			style={{ borderBottom: `1px solid ${secondaryColor}` }}
		>
			<TableCell type={'flag'}>
				<FlagImage src={flag} alt={`Flag for ${name}`} />
			</TableCell>

			<TableCell type={`name`}>{name}</TableCell>

			<TableCell type={'population'}>{population.toLocaleString()}</TableCell>

			<TableCell type={`languages`}>{languages.join(', ')}</TableCell>

			<TableCell type={`region`}>{region}</TableCell>
		</tr>
	);
}
