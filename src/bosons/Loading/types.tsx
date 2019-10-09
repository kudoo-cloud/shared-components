export type StyleKeys = 'component';

export type LoadingProps = withStylesHOCProps<StyleKeys> & {
  color?: string;
  size?: number;
};
