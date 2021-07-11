/** @flow **/

import { createTheming } from 'react-jss';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import PropTypes from 'prop-types';

// Creating a namespaced theming object.
const theming = createTheming('__KUDOO_THEME__');
const { ThemeProvider: KudooThemeProvider, withTheme } = theming;

export type Theme = {
  drawer: {
    closedWidth: number,
    openWidth: number,
  },
  palette: {
    blueGrey: { '100': string, '50': string },
    grey: {
      '100': string,
      '200': string,
      '300': string,
      '400': string,
      '50': string,
      '500': string,
      '600': string,
      '700': string,
    },
    primary: {
      color1: string,
      color2: string,
      color3: string,
    },
    secondary: { color1: string, color2: string },
    shadow: {
      color1: string,
      color2: string,
      color3: string,
    },
  },
  typography: { font: { family1: string, family2: string } },
  breakpoints: {
    keys: Array<string>,
    values: { [key: string]: number },
    up: Function,
    down: Function,
    between: Function,
    only: Function,
    width: Function,
  },
};

export const ThemePropTypes = PropTypes.shape({
  drawer: PropTypes.shape({
    closedWidth: PropTypes.number,
    openWidth: PropTypes.number,
  }),
  palette: PropTypes.shape({
    blueGrey: PropTypes.shape({
      '100': PropTypes.string,
      '50': PropTypes.string,
    }),
    grey: PropTypes.shape({
      '100': PropTypes.string,
      '200': PropTypes.string,
      '300': PropTypes.string,
      '400': PropTypes.string,
      '50': PropTypes.string,
      '500': PropTypes.string,
      '600': PropTypes.string,
      '700': PropTypes.string,
    }),
    primary: PropTypes.shape({
      color1: PropTypes.string,
      color2: PropTypes.string,
      color3: PropTypes.string,
    }),
    secondary: PropTypes.shape({
      color1: PropTypes.string,
      color2: PropTypes.string,
    }),
    shadow: PropTypes.shape({
      color1: PropTypes.string,
      color2: PropTypes.string,
      color3: PropTypes.string,
    }),
  }),
  typography: PropTypes.shape({
    font: PropTypes.shape({
      family1: PropTypes.string,
      family2: PropTypes.string,
    }),
  }),
  breakpoints: PropTypes.shape({
    keys: PropTypes.array,
    values: PropTypes.object,
    up: PropTypes.func,
    down: PropTypes.func,
    between: PropTypes.func,
    only: PropTypes.func,
    width: PropTypes.func,
  }),
}).isRequired;

const theme: Theme = {
  typography: {
    font: {
      family1: "'roboto condensed', sans-serif",
      family2: "'montserrat', sans-serif",
    },
  },
  palette: {
    primary: {
      color1: '#2bc88f',
      color2: '#29a9db',
      color3: '#3c4556',
    },
    secondary: {
      color1: '#f4a22a',
      color2: '#e40749',
    },
    shadow: {
      color1: '#068c58',
      color2: '#167e9e',
      color3: '#333944',
    },
    grey: {
      '50': '#f7f7fc',
      '100': '#f5f5f5',
      '200': '#eaeaea',
      '300': '#dedede',
      '400': '#b7b7b7',
      '500': '#707070',
      '600': '#353535',
      '700': '#838383',
    },
    blueGrey: {
      '50': '#4D5769',
      '100': '#717f9a',
    },
  },
  drawer: {
    openWidth: 250,
    closedWidth: 70,
  },
  breakpoints: createBreakpoints({}),
};

export default KudooThemeProvider;
export { theme, theming, withTheme };
