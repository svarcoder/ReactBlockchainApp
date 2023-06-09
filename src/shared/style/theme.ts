import { createGlobalStyle } from "styled-components";
// import { rgba } from 'polished'
// import url("https://p.typekit.net/p.css?s=1&k=mbf7fkk&ht=tk&f=39347.39348.39349&a=1312176&app=typekit&e=css");

import Bold from "../../asset/fonts/Poppins-Bold.ttf";
import Light from "../../asset/fonts/Poppins-Light.ttf";
import Medium from "../../asset/fonts/Poppins-Medium.ttf";
import Regular from "../../asset/fonts/Poppins-Regular.ttf";
import ExtraLight from "../../asset/fonts/Poppins-ExtraLight.ttf";
import SemiBold from "../../asset/fonts/Poppins-SemiBold.ttf";

export interface Colors {
	themeBackground: string;
	white: string;
	green: string;
	base: string;
	black: string;
	yellow: string;
	neon: string;
	buttonColor: string;
	cardBackground: string;
	gray: string;
	lightGray: string;
	InputBackground: string;
}

export const colors: Colors = {
	themeBackground: "#1B2732",
	white: "#ffffff",
	neon: "#00D7E7",
	green: "#01D14E",
	base: "#313131",
	black: "#333333",
	yellow: "#F3B723",
	buttonColor: "#F3B723",
	cardBackground: "#919ba5",
	gray: "#979797",
	lightGray: "#8499AE",
	InputBackground: "#767e86",
};

export interface ThemeStarter {
	[propName: string]: string | undefined;
	themeBackground: string;
	white: string;
	green: string;
	base: string;
	black: string;
	yellow: string;
	neon: string;
	buttonColor: string;
	cardBackground: string;
	gray: string;
	lightGray: string;
	InputBackground: string;
}

export const theme: ThemeStarter = {
	themeBackground: colors.themeBackground,
	white: colors.white,
	green: colors.green,
	base: colors.base,
	black: colors.black,
	yellow: colors.yellow,
	neon: colors.neon,
	buttonColor: colors.buttonColor,
	cardBackground: colors.cardBackground,
	gray: colors.gray,
	lightGray: colors.lightGray,
	InputBackground: colors.InputBackground,
};

export interface ScreenSizes {
	mediaXS: number;
	mediaS: number;
	mediaM: number;
	mediaL: number;
	mediaXL: number;
	mediaXXL: number;
	mediaLX: number;
	mediaLXX: number;
}
export const screenSizes: ScreenSizes = {
	mediaXS: 380,
	mediaS: 640,
	mediaM: 800,
	mediaL: 1024,
	mediaXL: 1280,
	mediaXXL: 1480,
	mediaLX: 1800,
	mediaLXX: 2000,
};

export const GlobalStyle = createGlobalStyle`

body {
    background: #efebeb;
}

@font-face {
  font-family: Bold;
  src: url(${Bold});
}
@font-face {
  font-family: Light; 
  src: url(${Light});
}
@font-face {
  font-family: Medium;
  src: url(${Medium});
}
@font-face {
  font-family: Regular;
  src: url(${Regular});
}
@font-face {
  font-family: ExtraLight;
  src: url(${ExtraLight});
}
@font-face {
  font-family: SemiBold;
  src: url(${SemiBold});
}

`;
