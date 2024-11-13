import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#2B4877',
    secondary: '#4D4C4C',
    white: '#FFFFFF',
  },
  fonts: ['Noto Sans', 'sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  fontWeights: {
    light: 100,
    normal: 400,
    bold: 500,
    bolder: 700,
  },
  shadows: {
    rightShadow: '0 0 15px rgba(0, 0, 0, 0.13)',
  },
  borders: {
    borderBottom: '1px solid #f4f4f4',
  },
};

export default function Theme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
