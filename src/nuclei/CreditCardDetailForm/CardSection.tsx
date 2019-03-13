import * as React from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement } from 'react-stripe-elements';

const handleChange = (change) => {
  console.log('[change]', change);
};

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

type Props = {
  fontSize: string
  classes: any
};
class CardSection extends React.Component<Props> {

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Submit");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cardContainer}  >
        <form className={classes.cardForm} onSubmit={this.handleSubmit}>
          <label className={classes.cardLabel}>
            Card number
            <CardNumberElement
              className={classes.cardInput}
              onChange={handleChange}
              {...createOptions(this.props.fontSize, '15px')}
            />
          </label>
          <label className={classes.cardLabel}>
            Expiration date
            <CardExpiryElement
              className={classes.cardInput}
              onChange={handleChange}
              {...createOptions(this.props.fontSize, '15px')}
            />
          </label>
          <label className={classes.cardLabel}>
            CVC
            <CardCVCElement
              className={classes.cardInput}
              onChange={handleChange}
              {...createOptions(this.props.fontSize, '15px')}
            />
          </label>
          <label className={classes.cardLabel}>
            Postal code
            <PostalCodeElement
              className={classes.cardInput}
              onChange={handleChange}
              {...createOptions(this.props.fontSize, '15px')}
            />
          </label>
          <button className={classes.cardButton}>Pay</button>
        </form>
      </div>
    );
  }
}

export default CardSection;
