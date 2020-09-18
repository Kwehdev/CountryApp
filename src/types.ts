import rootReducer from './redux/reducers';

export type RootState = ReturnType<typeof rootReducer>;

export type CountryData = {
	name: string;
	altSpellings: string[];
	borders: string[];
	capital: string;
	flag: string;
	languages: Language[];
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
};

export type Language = {
	name: string;
};
