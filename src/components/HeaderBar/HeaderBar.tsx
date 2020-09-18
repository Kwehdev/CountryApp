import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import SearchBar from '../SearchBar';
import ThemeSelect from '../ThemeSelect';

import styles from './Header.module.css';

export default function HeaderBar() {
	const { darkenedPrimary, secondaryColor } = useTypedSelector(
		(state) => state.theme
	);
	return (
		<div
			className={styles.Container}
			style={{
				backgroundColor: darkenedPrimary,
				color: secondaryColor,
			}}
		>
			<p
				className={styles.Title}
				style={{ borderRight: `3px solid ${secondaryColor}` }}
			>
				Countries App
			</p>
			<SearchBar />
			<ThemeSelect />
		</div>
	);
}
