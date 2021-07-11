import PropTypes from 'prop-types';
import { Theme, ThemePropTypes } from './theme';

export const withRouterProps = {
  match: PropTypes.object.isRequired, // will come from withRouter HOC
  location: PropTypes.object.isRequired, // will come from withRouter HOC
  history: PropTypes.object.isRequired, // will come from withRouter HOC
};

export type withRouterFlowType = {
  match: Object; // will come from withRouter HOC
  location: Object; // will come from withRouter HOC
  history: Object; // will come from withRouter HOC
};

export type withStylesFlowType = {
  classes?: any; // will come from withStyles HOC
  theme?: Theme; // will come from withStyles HOC
};

export const withStylesProps = {
  classes: PropTypes.object.isRequired, // will come from withStyles HOC
  theme: ThemePropTypes, // will come from withStyles HOC
};
