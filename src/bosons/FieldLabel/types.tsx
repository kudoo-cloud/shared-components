import { IComponentProps } from 'shared/src/atoms/Footer/types';

export type StyleKeys = 'component' | 'wrapper' | 'label' | 'linkWithLabel';

export type FieldLabelProps = IComponentProps<StyleKeys> & {
  /** label text */
  label: string;
  /** label text color */
  labelColor?: string;
  /** extra link with label */
  extraLinkWithLabel?: string;
  /** on click extra link **/
  onExtraLinkClicked?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
