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

class MapData extends React.Component<Props> {

  _renderButton = () => {
    const { classes, makeStepActive, unmarkedVisited, markedVisited } = this.props;
    return (
      <React.Fragment>
        <div className={classes.mainDiv}>
          Hello Map Data
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
              makeStepActive(0);
              unmarkedVisited(0);
            }}
          />
          <Button
            title="Next"
            id="next-button"
            classes={{ component: classes.prevNextButton }}
            applyBorderRadius
            compactMode
            buttonColor={'#29a9db'}
            onClick={() => {
              makeStepActive(2);
              markedVisited(1);
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
export default withStyles<Props>(styles)(MapData);
