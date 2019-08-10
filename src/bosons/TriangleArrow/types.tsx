import * as React from 'react';

export type StyleKeys = 'component' | 'arrow';

export type TriangleArrowProps = {
  /** direction of arrow **/
  direction?: string;
  /** color of arrow **/
  color?: string;
  /** size of arrow **/
  size?: number;
} & withStylesHOCProps<StyleKeys>;
