import { IComponentProps } from 'shared/src/atoms/Footer/types';

export type StyleKeys =
  | 'component'
  | 'root'
  | 'labelWrapper'
  | 'label'
  | 'buttons'
  | 'button'
  | 'highlighter';

export type ToggleButtonProps = IComponentProps<StyleKeys> & {
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
