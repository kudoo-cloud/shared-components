import PropTypes from 'prop-types';
import { Theme, ThemePropTypes } from './src/config/theme';
import { match } from 'react-router-dom';
import * as H from 'history';
import { SimpleStyle } from 'jss/css';

declare global {
  type withRouterHOCProps = {
    match: match; // will come from withRouter HOC
    location: H.Location; // will come from withRouter HOC
    history: H.History; // will come from withRouter HOC
  };

  type withStylesHOCProps<StyleKeys extends string> = {
    classes?: ClassesKeys<StyleKeys>; // will come from withStyles HOC
    theme?: Theme; // will come from withStyles HOC
  };

  type ClassesKeys<T extends string> = { [K in T]?: string };

  /** Types for style files */
  // This type is usefule for keys which has dynamic style based on props
  type StyleInnerFn<Props = {}> = (props: Props) => any;

  // This extends css in js type
  type StyleExtend<P> = {
    [k in keyof SimpleStyle]: SimpleStyle[k] | StyleInnerFn<P>
  };

  type JSSExtendKeys = '&:hover' | '&:active' | '&.hover' | '&.active';
  type JSSExtendsArr<Props> = { [k in JSSExtendKeys]: StyleExtend<Props> };

  // This type will be used to specify return type of style function
  type StyleFnReturnType<T extends string, Props extends Object = {}> = {
    [K in T]?: StyleExtend<Props> | JSSExtendsArr<Props>
  };
}
