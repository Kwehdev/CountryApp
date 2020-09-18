import { ColorTheme } from './types';

export const darkTheme: ColorTheme = {
	primaryColor: `#282c34`,
	darkenedPrimary: `#24272e`,
	secondaryColor: `#D7D3CB`,
};

export const lightTheme: ColorTheme = {
	primaryColor: `#D7D3CB`,
	darkenedPrimary: `#c4bfb3`,
	secondaryColor: `#282c34`,
};

type ThemeMap = {
	[key: string]: ColorTheme;
};

export const themeMap: ThemeMap = {
	dark: darkTheme,
	light: lightTheme,
};
