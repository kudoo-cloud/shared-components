import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import License from './index';

class CustomLicense extends React.Component {
  state = {
    index: 0,
  };
  render() {
    return (
      <License
        currency="AUD"
        tiersPricing={[
          { pricing: 0, currency: 'AUD' },
          { pricing: 25, currency: 'AUD' },
          { pricing: 100, currency: 'AUD' },
        ]}
        onTierClick={(tier, pricing, index) => {
          console.log({ tier, pricing, index });
          this.setState({ index });
        }}
        selectedTierIndex={this.state.index}
      />
    );
  }
}

storiesOf('License', module)
  .add('Default', withInfo('Default License')(() => <License />))
  .add('with Custom Pricing', withInfo('with Custom Pricing')(() => <CustomLicense />));
