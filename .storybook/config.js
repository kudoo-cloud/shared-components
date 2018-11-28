import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '@babel/polyfill';
import 'react-tippy/dist/tippy.css';
import '../src/config/theme/css/index.scss';
import KudooThemeProvider, { theme } from '../src/config/theme';
import { I18nProvider } from '@lingui/react';
import { jss, JssProvider } from 'react-jss';
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

const MyJssProvider = storyFn => (
  <I18nProvider language="en">
    <KudooThemeProvider theme={theme}>
      <JssProvider jss={jss}>{storyFn()}</JssProvider>
    </KudooThemeProvider>
  </I18nProvider>
);
addDecorator(MyJssProvider);

function loadStories() {
  const req = require.context('../', true, /\.story\.js$/);
  console.log(req);
  requireAll(req);
}

// Option defaults:
setOptions({
  name: 'Kudoo',
  url: 'http://www.kudoo.io/',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
  hierarchySeparator: null,
  sidebarAnimations: true,
  selectedAddonPanel: undefined,
});

configure(loadStories, module);
