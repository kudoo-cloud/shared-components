import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import truncate from 'smart-truncate';
import withStyles from 'components/hoc/withStyles';
import { withStylesProps } from 'components/config/types';
import { FileBlockProps } from './types';
import styles from './styles';

type State = {};

class FileBlock extends Component<FileBlockProps, State> {
  static propTypes = {
    file: PropTypes.any,
    onRemoveClick: PropTypes.func,
    showRemoveButton: PropTypes.bool,
    variant: PropTypes.oneOf(['none', 'interactive', 'link']),
    ...withStylesProps,
  };

  static defaultProps = {
    onRemoveClick: () => {},
    showRemoveButton: true,
    variant: 'none',
  };

  render() {
    const {
      classes,
      file,
      showRemoveButton,
      variant,
      onRemoveClick,
    } = this.props;
    const extPos = get(file, 'name', '').lastIndexOf('.');
    const ext = get(file, 'name', '').substring(extPos + 1);
    let WrapComponent;
    let extraProps = {};

    if (variant === 'link' && get(file, 'url')) {
      WrapComponent = 'a';
      extraProps = {
        href: get(file, 'url'),
        target: '_blank',
      };
    } else {
      WrapComponent = 'div';
    }

    return (
      <WrapComponent className={classes.component} {...extraProps}>
        <div className={classes.icon}>
          <img
            src={require('../../assets/images/file-icon.png')}
            className={classes.iconImage}
          />
          <div className={classes.ext}>{ext}</div>
        </div>
        <div className={classes.filename}>
          {truncate(file.name || '', 12, { position: 5 })}
        </div>

        {variant === 'interactive' && (
          <div className={classes.hoverIconWrapper}>
            {get(file, 'url') && (
              <a
                href={get(file, 'url')}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkIconWrapper}
                onClick={e => {
                  e.stopPropagation();
                }}
              >
                <i className={cx('fa fa-link', classes.linkIcon)} />
              </a>
            )}
            {showRemoveButton && (
              <div className={classes.closeIconWrapper}>
                <i
                  className={cx('fa fa-times', classes.closeIcon)}
                  onClick={onRemoveClick}
                />
              </div>
            )}
          </div>
        )}
      </WrapComponent>
    );
  }
}

export default withStyles<FileBlockProps>(styles)(FileBlock as any);
