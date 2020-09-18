import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import TableCell from '../TableCell';

export default function TableHeader() {
	const { secondaryColor } = useTypedSelector((state) => state.theme);
	return (
		<thead>
			<tr style={{ borderBottom: `1px solid ${secondaryColor}` }}>
				<TableCell type={`flag`}>Flag</TableCell>
				<TableCell type={`name`}>Name</TableCell>
				<TableCell type={`population`}>Population</TableCell>
				<TableCell type={`languages`}>Languages</TableCell>
				<TableCell type={`region`}>Region</TableCell>
			</tr>
		</thead>
	);
}
