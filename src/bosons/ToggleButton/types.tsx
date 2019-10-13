export type StyleKeys =
  | 'component'
  | 'root'
  | 'labelWrapper'
  | 'label'
  | 'buttons'
  | 'button'
  | 'highlighter';

export type ToggleButtonProps = withStylesHOCProps<StyleKeys> & {
  name?: string;
  id?: string;
  title?: string;
  /** labels **/
  labels: Array<string>;
  /** active button color **/
  activeColor?: string;
  /** called when selection change **/
  onChange?: Function;
  /** selected button index **/
  selectedIndex?: number;
};
