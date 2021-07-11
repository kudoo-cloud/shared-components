import React from 'react';
import FileBlock from './index';
import renderer from 'react-test-renderer';
import KudooThemeProvider, { theme } from 'components/config/theme';
import { I18nProvider } from 'lingui-react';
import toJson from 'enzyme-to-json';

it('renders FileBlock', () => {
  const wrapper = render(
    <I18nProvider language="en">
      <KudooThemeProvider theme={theme}>
        <div style={{ width: 500 }}>
          <h4>default</h4>
          <FileBlock file={{ name: 'Testing.png' }} />
          <h4>variant: interactive</h4>
          <FileBlock
            file={{
              name: 'Long abc name.png',
              url: 'https://images.unsplash.com/photo-1504511045-dc6e5c9bea25',
            }}
            variant="interactive"
          />
          <h4>variant: link</h4>
          <FileBlock
            file={{
              name: 'nature.png',
              url: 'https://images.unsplash.com/photo-1504511045-dc6e5c9bea25',
            }}
            variant="link"
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
