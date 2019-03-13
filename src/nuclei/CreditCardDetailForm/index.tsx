import * as React from 'react';
import PropTypes from 'prop-types';
import { Elements, injectStripe } from 'react-stripe-elements';
import withStyles from 'components/hoc/withStyles';
import CardSection from './CardSection';
import styles from './styles';

type CreditCardDetailProps = {
  classes:any
};

type CreditCardDetailState = {
  elementFontSize: string
};

class CreditCardDetailForm extends React.Component<CreditCardDetailProps, CreditCardDetailState> {
  static propTypes = {
    classes: PropTypes.any,
  };

  constructor(props){
    super(props);
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    };

    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({elementFontSize: '14px'});
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({elementFontSize: '18px'});
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { elementFontSize } = this.state;
    return (
      <Elements fontSize={elementFontSize} >
        <CardSection classes={classes} fontSize={elementFontSize} />
      </Elements>
    );
  }
}

export default withStyles(styles)(CreditCardDetailForm);
