import * as React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import isEqual from "lodash/isEqual";
import { LicenseState, LicenseProps } from "./types";
import SubscriptionCard from "../../bosons/SubscriptionCard";
import Dropdown from "../../bosons/Dropdown";
import Loading from "../../bosons/Loading";
import withStyles from "components/hoc/withStyles";
import styles from "./styles";
import { CURRENCY } from "./currency";
import { getCurrencyBaseAmount } from "components/helpers";
import Dinero from "dinero.js";

class License extends React.Component<LicenseProps, LicenseState> {
  static propTypes = {
    isConvertCurrencyBtnVisible: PropTypes.bool,
    onConvertCurrencyDDChange: PropTypes.func,
    classes: PropTypes.any,
    currency: PropTypes.string,
    isVizierRepo: PropTypes.bool,
    isWebsite: PropTypes.bool,
    subscriptionPrice: PropTypes.array,
    subscriptionRange: PropTypes.number
  };

  state = {
    isConvertCurrencyDDVisible: false,
    selectedCurrency: "USD",
    justify: this.props.isVizierRepo ? "flex-start" : "center",
    lg: this.props.isVizierRepo ? 4 : 5,
    isLoading: false,
    // To store value after calculation
    calculatedSubscriptionPrice: this.props.subscriptionPrice,
    calculatedSubscriptionRange: this.props.subscriptionRange,
    component: {
      justifyContent: this.props.isVizierRepo ? "flex-start" : "center"
    }
  };

  componentDidMount() {
    this._handleConvertCurrencyChange(this.props.currency);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.currency, this.props.currency)) {
      this._handleConvertCurrencyChange(this.props.currency);
    }
  }

  _renderButton() {
    const { isWebsite, classes, isVizierRepo } = this.props;
    const { isConvertCurrencyDDVisible } = this.state;
    return (
      <div className={classes.cardBtnWrapper}>
        {!isVizierRepo &&
          isWebsite &&
          !isConvertCurrencyDDVisible && (
            <Button
              className={classes.cardBtn}
              onClick={this._onCurrencyBtnClick}
              variant={"contained"}>
              Convert Currency
            </Button>
          )}
      </div>
    );
  }

  _handleOnChange = (name, e) => {
    this.props.onConvertCurrencyDDChange(e.value);
    this._handleConvertCurrencyChange(e.value);
  };

  _handleConvertCurrencyChange = value => {
    this.setState(
      {
        isLoading: true
      },
      () => {
        let { subscriptionPrice, subscriptionRange } = this.props;
        let {
          calculatedSubscriptionRange,
          calculatedSubscriptionPrice
        } = this.state;
        getCurrencyBaseAmount("USD", value).then(res => {
          calculatedSubscriptionRange = Math.round(subscriptionRange * res);
          for (let i = 0; i < subscriptionPrice.length; i++) {
            calculatedSubscriptionPrice[i] = Math.round(
              subscriptionPrice[i] * res
            );
          }
          this.setState({
            calculatedSubscriptionRange,
            calculatedSubscriptionPrice,
            selectedCurrency: value,
            isLoading: false
          });
        });
      }
    );
  };

  _renderDropDown = () => {
    const { classes } = this.props;
    const { isConvertCurrencyDDVisible, selectedCurrency } = this.state;
    return (
      <div className={classes.cardBtnWrapper}>
        {isConvertCurrencyDDVisible && (
          <Dropdown
            label="Currency"
            className={classes.currencyDropdown}
            items={CURRENCY}
            value={selectedCurrency}
            onChange={e => {
              this._handleOnChange("selectedCurrency", e);
            }}
          />
        )}
      </div>
    );
  };

  _onCurrencyBtnClick = () => {
    this.setState({
      isConvertCurrencyDDVisible: true
    });
  };

  _renderCard = () => {
    const { classes, currency } = this.props;
    const {
      calculatedSubscriptionRange,
      calculatedSubscriptionPrice,
      justify,
      lg,
      isLoading,
      component
    } = this.state;
    const subscriptionPriceFree = Dinero({
      amount: calculatedSubscriptionPrice[0] * 100,
      currency: currency
    }).toFormat("$0,0");
    const subscriptionPricePaid = Dinero({
      amount: calculatedSubscriptionPrice[1] * 100,
      currency: currency
    }).toFormat("$0,0");
    const subscriptionRange = Dinero({
      amount: calculatedSubscriptionRange * 100,
      currency: currency
    }).toFormat("$0,0");
    return (
      <React.Fragment>
        {isLoading ? (
          <Loading color={"#000"} size={200} className={component} />
        ) : (
          <Grid
            container
            spacing={40}
            classes={{ container: classes.container }}
            justify={justify}>
            <Grid
              className={classes.subscriptionCardGrid}
              item
              xs={12}
              sm={6}
              md={6}
              lg={lg}>
              <SubscriptionCard
                type="FREE"
                price={subscriptionPriceFree}
                shortDescription={`Kudoo operates on a pay per usage model. If you use Kudoo to invoice for less than ${subscriptionRange} then Kudoo will be free`}
              />
            </Grid>
            <Grid
              className={classes.subscriptionCardGrid}
              item
              xs={12}
              sm={6}
              md={6}
              lg={lg}>
              <SubscriptionCard
                type="PAID"
                price={subscriptionPricePaid}
                period="One time fee"
                shortDescription={`If you Invoice your customers for more than ${subscriptionRange} through Kudoo you will be charged a one off fee`}
              />
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this._renderButton()}
        {this._renderDropDown()}
        {this._renderCard()}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(License);
