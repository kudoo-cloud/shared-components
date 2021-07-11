import * as React from 'react';
import { withStylesFlowType } from 'components/config/types';

export type FileBlockProps = {
  file:
    | File
    | {
        name: string;
        url: string;
      };
  /** function to call on click of remove button */
  onRemoveClick?: (e?: any) => void;
  /** whether to show remove button or not */
  showRemoveButton?: boolean;
  /** Variant decides how to render file icons, Default: 'none'
   * 1. interactive: will show remove button on hover, if `file.url` is provided then link icon will also visible
   * 2.	link: Hide remove icon and render wrapper as anchor link with `file.url`
   * 3. none: Simply render File Icon with name */
  variant: 'none' | 'interactive' | 'link';
} & withStylesFlowType;
