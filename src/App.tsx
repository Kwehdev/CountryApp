import React from 'react';
import useTypedSelector from './hooks/useTypedSelector';
import Routes from './Routes';
export default function App() {
  const { data, error } = useTypedSelector((state) => state.countries);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getAllCountries());
    }
  }, [data, dispatch]);

  if (error) {
    return <p>Failed To load country data. Reason: {error.message}</p>;
  }

  if (data.length === 0) {
    return <p>Please wait, loading country data...</p>;
  }

  return (
    <>
      <Routes />
    </>
  );
}
