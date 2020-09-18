import { ColorTheme } from './types';

export const darkTheme: ColorTheme = {
	primaryColor: `#282c34`,
	darkenedPrimary: `#24272e`,
	secondaryColor: `#f2f1ef`,
};

export const lightTheme: ColorTheme = {
	primaryColor: `#dcd9d4`,
	darkenedPrimary: `#e7e5e1`,
	secondaryColor: `#152a23`,
};

type ThemeMap = {
	[key: string]: ColorTheme;
};

export const themeMap: ThemeMap = {
	dark: darkTheme,
	light: lightTheme,
};
