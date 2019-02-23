import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Select } from '@material-ui/core';
import { LicenseState, LicenseProps } from './types';
import SubscriptionCard from '../../bosons/SubscriptionCard';
import Dropdown from '../../bosons/Dropdown';
import withStyles from 'components/hoc/withStyles';
import styles from './styles';
import { CURRENCY } from './currency';

class License extends React.Component<LicenseProps, LicenseState> {

  static propTypes = {
    isConvertCurrencyBtnVisible: PropTypes.bool,
    onConvertCurrencyDDChange: PropTypes.func,
    subscriptionPrice: PropTypes.array,
    subscriptionRange: PropTypes.array,
    classes: PropTypes.any,
    currency: PropTypes.string
  };

  state = {
    isConvertCurrencyDDVisible: false,
    selectedCurrency: 'USD'
  };

  _renderButton() {
    const { isConvertCurrencyBtnVisible, classes } = this.props;
    const { isConvertCurrencyDDVisible } = this.state;
    return (
      <div className={classes.cardBtnWrapper}>
        { (!isConvertCurrencyDDVisible && isConvertCurrencyBtnVisible) && (
            <Button
              className={classes.cardBtn}
              // classes={classes.cardBtn}
              onClick={this._onCurrencyBtnClick}
              variant={'contained'}
            >
              Convert Currency
            </Button>
        )}
      </div>
    )
  }

  _handleOnChange = (name, e) => {
    this.setState({
      selectedCurrency: e.value
    },()=>{
      this.props.onConvertCurrencyDDChange(this.state.selectedCurrency);
    });
  };

  _renderDropDown() {
    const { classes } = this.props;
    const { isConvertCurrencyDDVisible, selectedCurrency } = this.state;
    return (
      <div className={classes.cardBtnWrapper}>
        { isConvertCurrencyDDVisible && (
          <Dropdown
            label="Currency"
            className={classes.currencyDropdown}
            items={CURRENCY}
            value={selectedCurrency}
            onChange={(e)=>{this._handleOnChange("selectedCurrency", e)}}
          />
        )}
      </div>
    )
  }

  _onCurrencyBtnClick = () => {
    this.setState({
      isConvertCurrencyDDVisible: true,
    })
  };

  render() {
    const { classes, align, lg, currency, subscriptionPrice, subscriptionRange } = this.props;
    return (
      <React.Fragment>
        {this._renderButton()}
        {this._renderDropDown()}
        <Grid container spacing={40} classes={{ container: classes.container }} justify={align}>
          <Grid item xs={12} sm={6} md={6} lg={lg}>
            <SubscriptionCard
              type='FREE'
              price={`${currency} ${subscriptionPrice[0]}`}
              shortDescription={`For less than ${subscriptionRange[0]} ${currency} on total invoice`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={lg}>
            <SubscriptionCard
              type='PAID'
              price={`${currency} ${subscriptionPrice[1]}`}
              period='One time fee'
              shortDescription={`For more than ${subscriptionRange[0]} ${currency} on total invoice`}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(License);
