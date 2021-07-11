import * as React from 'react';
import withStyles from 'components/hoc/withStyles';
import styles from './styles';
import Button from '../../bosons/Button';
import FieldLabel from '../../bosons/FieldLabel';
import FileBlock from '../../bosons/FileBlock';
import Dropzone from 'react-dropzone';
type Props = {
  classes?: any,
  makeStepActive: Function,
  markedVisited: Function
}

class UploadFile extends React.Component<Props> {

  _renderAttachment = () => {
    const { classes } = this.props;
    return (
      <div className={classes.mainDiv}>
        <div className={classes.attachmentWrapper}>
          <FieldLabel label="Bank Statement" />
          <Dropzone
            multiple
            className={classes.dragAreaWrapper}
            activeClassName={classes.activeDragArea}
          >
            <div className={classes.attachmentBlock}>
              <div data-html2canvas-ignore>
                <div className={classes.dragText}>
                  <p>Drag and drop or choose a file to upload your Bank statement.</p>
                  <p>Only CSV files are supported.</p>
                </div>
              </div>
            </div>
          </Dropzone>
        </div>
      </div>
    )
  };

  _renderButton = () => {
    const { classes, makeStepActive, markedVisited } = this.props;
    return (
      <React.Fragment>
        <div className={classes.prevNextWrapper}>
          <div />
          <Button
            title="Next"
            id="next-button"
            classes={{ component: classes.prevNextButton }}
            applyBorderRadius
            compactMode
            buttonColor={'#29a9db'}
            onClick={() => {
              makeStepActive(1);
              markedVisited(0);
            }}
          />
        </div>
      </React.Fragment>
    )
  };

  render() {
    return (
      <React.Fragment>
        {this._renderAttachment()}
        {this._renderButton()}
      </React.Fragment>
    );
  }
}
export default withStyles<Props>(styles)(UploadFile);
