import * as React from 'react';
import withStyles from 'components/hoc/withStyles';
import styles from './styles';
import Button from '../../bosons/Button';

type Props = {
  classes?: any,
  makeStepActive: Function,
  unmarkedVisited: Function,
  markedVisited: Function
}

class DetailData extends React.Component<Props> {

  _renderButton = () => {
    const { classes, makeStepActive, unmarkedVisited } = this.props;
    return (
      <React.Fragment>
        <div className={classes.mainDiv}>
          Hello Details
        </div>
        <div className={classes.prevNextWrapper}>
        <Button
          title="Prev"
          classes={{ component: classes.prevNextButton }}
          applyBorderRadius
          compactMode
          buttonColor={'#29a9db'}
          withoutBackground
          onClick={() => {
            makeStepActive(1);
            unmarkedVisited(1);
          }}
        />
      </div>
      </React.Fragment>
    )
  };

  render() {

    return (
      <React.Fragment>
        {this._renderButton()}
      </React.Fragment>
    );
  }
}
export default withStyles<Props>(styles)(DetailData);
