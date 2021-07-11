import * as React from 'react';
import { DataImportsState, DataImportsProps } from './types';
import withStyles from 'components/hoc/withStyles';
import styles from './styles';
import WizardSteps from '../../bosons/WizardSteps';
import UploadFile from './uploadFile';
import MapData from './mapData';
import DetailData from './detailData';
import findIndex from 'lodash/findIndex';

class DataImports extends React.Component<DataImportsProps, DataImportsState> {
  constructor(props){
    super(props);
    this.state = {
      wizardStep : [
        {
          label: 'Upload',
          active: true,
          component: (
            <UploadFile
              classes={props.classes}
              makeStepActive={this._makeStepActive}
              markedVisited={this._markedVisited}
            />
          ),
        },
        {
          label: 'Map',
          component: (
            <MapData
              classes={props.classes}
              makeStepActive={this._makeStepActive}
              markedVisited={this._markedVisited}
              unmarkedVisited={this._unmarkedVisited}
            />
          ),
        },
        {
          label: 'Details',
          component: (
            <DetailData
              classes={props.classes}
              makeStepActive={this._makeStepActive}
              markedVisited={this._markedVisited}
              unmarkedVisited={this._unmarkedVisited}
            />
          ),
        },
      ]
    }
  }

  _makeStepActive = (index: number) => {
    let { wizardStep } = this.state;
    let pos: number = findIndex(wizardStep, { active: true });
    if (pos > -1) {
      wizardStep[pos] = {
        ...wizardStep[pos],
        active: false,
      };
      wizardStep[index] = {
        ...wizardStep[index],
        active: true,
      };
      this.setState({ wizardStep });
    }
  };

  _markedVisited = (index: number) => {
    let { wizardStep } = this.state;
    wizardStep[index] = {
      ...wizardStep[index],
      visited: true,
    };
    this.setState({
      wizardStep,
    });
  };

  _unmarkedVisited = (index: number) => {
    let { wizardStep } = this.state;
    wizardStep[index] = {
      ...wizardStep[index],
      visited: false,
    };
    this.setState({
      wizardStep,
    });
  };

  _onStepClick = (step, index: number) => {
    this._makeStepActive(index);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <WizardSteps
            steps={this.state.wizardStep}
            onStepClick={this._onStepClick}
          />
        </div>
      </React.Fragment>
  );
  }
}
export default withStyles<DataImportsProps>(styles)(DataImports);
