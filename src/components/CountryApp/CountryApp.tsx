import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import HeaderBar from '../HeaderBar';

export default function CountryApp() {
	const { data } = useTypedSelector((state) => state.countries);

	return (
		<div>
			<HeaderBar />
		</div>
	);
}
