import * as React from 'react';
import cx from 'classnames';
import { Grid } from '@material-ui/core';
import isEqual from 'lodash/isEqual';
import { LicenseState, LicenseProps } from './types';
import SubscriptionCard from '../../bosons/SubscriptionCard';
import Dropdown from '../../bosons/Dropdown';
import Loading from '../../bosons/Loading';
import withStyles from 'components/hoc/withStyles';
import styles from './styles';
import { CURRENCY } from './currency';
import { getCurrencyBaseAmount } from 'components/helpers';
import Dinero from 'dinero.js';

class License extends React.Component<LicenseProps, LicenseState> {
  static defaultProps = {
    showConvertCurrencyDropdown: true,
    onCurrencyChange: () => {},
    onTierClick: () => {},
  };

  state = {
    selectedCurrency: 'AUD',
    isLoading: false,
    tiers: [
      {
        type: 'FREE',
        interval: 'Completely free for all users',
        description:
          'All features except those specific to Pro or Enterprise version',
      },
      {
        type: 'PRO',
        interval: 'Price per user per month',
        description: 'Includes PBS and MBS Integration',
      },
      {
        type: 'ENTERPRISE',
        interval: 'Price per user per month',
        description:
          'Automated Procurement, AI Budgeting and Sales predictions, Management Reporting',
      },
    ],
    tiersPricing: [
      {
        pricing: 0,
        currency: 'AUD',
      },
      {
        pricing: 9.99,
        currency: 'AUD',
      },
      {
        pricing: 99.0,
        currency: 'AUD',
      },
    ],
  };

  componentDidMount() {
    if (
      this.props.currency &&
      !isEqual(this.props.currency, this.state.selectedCurrency)
    ) {
      this._handleConvertCurrencyChange(this.props.currency);
    }
    if (this.props.tiers && !isEqual(this.props.tiers, this.state.tiers)) {
      this._updateTiers(this.props.tiers);
    }
    if (
      this.props.tiersPricing &&
      !isEqual(this.props.tiersPricing, this.state.tiersPricing)
    ) {
      this._updateTiersPricing(this.props.tiersPricing);
    }
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.currency, this.props.currency)) {
      this._handleConvertCurrencyChange(this.props.currency);
    }
    if (!isEqual(prevProps.tiers, this.props.tiers)) {
      this._updateTiers(this.props.tiers);
    }
    if (!isEqual(prevProps.tiersPricing, this.props.tiersPricing)) {
      this._updateTiersPricing(this.props.tiersPricing);
    }
  }

  _updateTiers = (incomingTiers) => {
    this.setState({
      tiers: incomingTiers,
    });
  };

  _updateTiersPricing = (newTiersPricing) => {
    this.setState({
      tiersPricing: newTiersPricing,
    });
  };

  _handleOnChange = (name, e) => {
    this.props.onCurrencyChange(e.value);
    this._handleConvertCurrencyChange(e.value);
  };

  _handleConvertCurrencyChange = async (nextSelectedCurrency) => {
    this.setState({ isLoading: true });
    const { tiers, selectedCurrency, tiersPricing } = this.state;
    const res = await getCurrencyBaseAmount(
      selectedCurrency,
      nextSelectedCurrency
    );
    const newTiersPricing = tiersPricing.map((tier) => {
      tier.pricing = Math.round(tier.pricing * res);
      tier.currency = nextSelectedCurrency;
      return tier;
    });
    this.setState({
      selectedCurrency: nextSelectedCurrency,
      isLoading: false,
      tiersPricing: newTiersPricing,
    });
  };

  _renderDropDown = () => {
    const { classes, showConvertCurrencyDropdown } = this.props;
    const { selectedCurrency } = this.state;
    return (
      <div className={classes.dropdownWrapper}>
        {showConvertCurrencyDropdown && (
          <Dropdown
            label="Currency"
            items={CURRENCY}
            value={selectedCurrency}
            onChange={(e) => {
              this._handleOnChange('selectedCurrency', e);
            }}
            classes={{
              component: classes.currencyDropdown,
            }}
          />
        )}
      </div>
    );
  };

  _renderCard = () => {
    const { classes, onTierClick, selectedTierIndex } = this.props;
    const { isLoading, tiers, selectedCurrency, tiersPricing } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loading size={100} />
        ) : (
          <Grid
            container
            spacing={16}
            classes={{ container: classes.tiersWrapper }}
          >
            {tiers.map((tier, index) => {
              const finalPrice = Dinero({
                amount: tiersPricing[index].pricing * 100,
                currency: selectedCurrency,
              }).toFormat('$0,0');
              return (
                <Grid
                  key={index}
                  className={classes.subscriptionCardGrid}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  onClick={() => onTierClick(tier, tiersPricing[index], index)}
                >
                  <SubscriptionCard
                    type={tier.type}
                    price={finalPrice}
                    shortDescription={tier.description}
                    period={tier.interval}
                    highlighted={selectedTierIndex === index}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        {this._renderDropDown()}
        {this._renderCard()}
      </div>
    );
  }
}

export default withStyles(styles)(License) as any;
