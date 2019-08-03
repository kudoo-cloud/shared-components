import PropTypes from 'prop-types';
import { Theme, ThemePropTypes } from './src/config/theme';
import { match } from 'react-router-dom';
import * as H from 'history';

declare global {
  type withRouterHOCProps = {
    match: match; // will come from withRouter HOC
    location: H.Location; // will come from withRouter HOC
    history: H.History; // will come from withRouter HOC
  };

  type withStylesHOCProps<StyleKeys extends string> = {
    classes?: StyleFnReturnType<StyleKeys>; // will come from withStyles HOC
    theme?: Theme; // will come from withStyles HOC
  };

  type StyleFnReturnType<T extends string> = { [K in T]?: any };
}
