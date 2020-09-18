import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../hooks/useTypedSelector';

import { getAllCountries } from '../redux/actions/country';

export default function Home() {
	const dispatch = useDispatch();
	const { data, error } = useTypedSelector((state) => state.countries);

	useEffect(() => {
		if (error) return;

		// If countries is empty, dispatch an Action resulting in API Call and process.
		if (data.length === 0) {
			dispatch(getAllCountries());
		}
	}, [dispatch, data, error]);

	const Display = useMemo(() => {
		// Return error message if fetch call failed.
		if (error)
			return <p>Failed To load country data. Reason: {error.message}</p>;

		// Return loading message if API request loading.
		if (data.length === 0) return <p>Please wait, loading country data...</p>;
		return <p>Yay</p>;
	}, [data, error]);

	return <>{Display}</>;
}
