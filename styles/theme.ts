import { createTheme } from '@mui/material';

export const themeMaterial = createTheme({
  typography: {
    fontFamily: ['PT Sans'].join(','),
  },
});

export const theme = {
  pallette: {
    mainBlack: '#282828',
    mainRed: '#E22813',
    lightText: '#848484',
    lightIco: '#B1B1B1',
    mainWhite: '#FFFFFF',
    lightBckg: '#F8F8F8',
    lightTxtOnDarkBckg: '#B1D6F1',
    gradLeftMenuBckg: 'linear-gradient(90deg, #FCFDFD 0%, #F5F7FB 100%)',
    mainBorder: '#E3E6EC',
    lightSecond: '#F4F6FA',
    dark: '#200C4D',
    darkBlue: '#274765',
    darkBlueHover: '#41617F',
    black: '#000000',
    bckgSilver: '#FAFBFD',
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 36, 72, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};
