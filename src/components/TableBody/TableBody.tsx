import React, { useMemo } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import FlagImage from '../FlagImage';
import TableCell from '../TableCell';
import TableRow from '../TableRow';

export default function TableBody() {
	const { data } = useTypedSelector((state) => state.countries);

	const destructuredData = useMemo(() => {
		return data.map(({ flag, name, languages, population, region }) => ({
			flag,
			name,
			languages: languages.map(({ name }) => name).sort(),
			population,
			region,
		}));
	}, [data]);

	const TableRows = useMemo(
		() => destructuredData.map((country) => <TableRow {...country} />),
		[destructuredData]
	);
	return <tbody>{TableRows}</tbody>;
}
