/* @flow */
import * as React from 'react';
import { type withStylesFlowType } from 'src/config/types';

export type TooltipProps = {
  /* Plain string */
  title?: string,
  /* Tooltip content. If you don't define html, the title will be used */
  html?: React.Node,
  /** Specifies the type of transition animation a tooltip has. */
  animation?: 'shift' | 'perspective' | 'fade' | 'scale' | 'none',
  /** Specifies which direction to position the tooltip on the element. */
  position: 'top' | 'bottom' | 'left' | 'right',
  /** Adds an arrow pointing to the tooltipped element. */
  arrow: boolean,
  /** Specifies how big the tooltip's arrow is. */
  arrowSize: 'small' | 'regular' | 'big',
  /** Callback when the tooltip has been triggered and has started to transition in */
  onShow: Function,
  /** Callback when the tooltip has begun to transition out */
  onHide: Function,
  /** Specifies which type of events will trigger a tooltip to show. Separate each by a space. mouseenter is for hovering and touch on mobile, and focus is for keyboard navigation. */
  trigger: 'mouseenter' | 'focus' | 'click' | 'manual',
  /** children */
  children: Function,
  ...$Exact<withStylesFlowType>,
};
