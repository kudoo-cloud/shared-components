/* @flow */
import * as React from 'react';
import type { TextFieldProps } from './types';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';
import FieldLabel from 'components/FieldLabel';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {
  value?: string,
  isFocused?: boolean,
  showingPassword?: boolean,
};

class TextField extends React.Component<TextFieldProps, State> {
  inputRef: React.ElementRef<HTMLElement>;

  static propTypes = {
    applyBottomBorderRadius: PropTypes.bool,
    applyTopBorderRadius: PropTypes.bool,
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    classes: PropTypes.object,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    errorColor: PropTypes.string,
    extraLinkWithLabel: PropTypes.string,
    icon: PropTypes.node,
    id: PropTypes.string,
    isReadOnly: PropTypes.bool,
    label: PropTypes.string,
    multiline: PropTypes.bool,
    name: PropTypes.string,
    noBorderRadius: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    onExtraLinkClicked: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    placeholderColor: PropTypes.string,
    required: PropTypes.bool,
    showClearIcon: PropTypes.bool,
    showErrorMessage: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    maxlength: PropTypes.number,
    isNumber: PropTypes.bool,
    getRef: PropTypes.func,
  };

  static defaultProps = {
    autoComplete: 'on',
    type: 'text',
    disabled: false,
    isReadOnly: false,
    required: false,
    error: '',
    showErrorMessage: true,
    label: '',
    name: '',
    value: '',
    onBlur: (e: SyntheticEvent<HTMLInputElement>) => {},
    onChangeText: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    autoFocus: false,
    showClearIcon: false,
    extraLinkWithLabel: '',
    onExtraLinkClicked: () => {},
    multiline: false,
    maxlength: undefined,
    isNumber: false,
    getRef: () => {},
  };

  state = {
    value: this.props.value,
    isFocused: false,
    showingPassword: false,
  };

  componentDidMount() {
    this.props.getRef(this);
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (props.value !== prevProps.value) {
      this.setState({
        value: props.value,
      });
    }
  }

  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  _handleOnChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value,
    });
    if (this.props.onChangeText) {
      this.props.onChangeText(e.currentTarget.value);
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  _handleOnFocus = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      isFocused: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  _handleOnBlur = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      isFocused: false,
    });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  _handleOnKeyPress = e => {
    if (this.props.isNumber) {
      if (/[\d\.]/.test(e.key)) {
        if (this.props.onKeyPress) {
          this.props.onKeyPress(e);
        }
        return true;
      }
      e.preventDefault();
      return false;
    }
    if (this.props.onKeyPress) {
      this.props.onKeyPress(e);
    }
    return true;
  };

  _clearTextField = () => {
    this.setState({
      value: '',
    });
    if (this.props.onChangeText) {
      this.props.onChangeText('');
    }
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  _showPassowrd = () => {
    this.inputRef.type = 'text';
    this.setState({
      showingPassword: true,
    });
  };

  _hidePassowrd = () => {
    this.inputRef.type = 'password';
    this.setState({
      showingPassword: false,
    });
  };

  _renderIcon() {
    let { icon, classes } = this.props;
    if (!icon) {
      return null;
    }
    return <div className={cx(classes.leftIcon)}>{icon}</div>;
  }

  _renderTextInput() {
    const { classes, multiline } = this.props;
    if (multiline) {
      return (
        <textarea
          className={cx(classes.textInput, classes.textarea)}
          ref={(ref: any) => {
            this.inputRef = ref;
          }}
          value={this.state.value}
          placeholder={this.props.placeholder}
          autoFocus={this.props.autoFocus}
          disabled={this.props.disabled}
          id={this.props.id}
          name={this.props.name}
          onBlur={this._handleOnBlur}
          onChange={this._handleOnChange}
          onFocus={this._handleOnFocus}
          onKeyDown={this.props.onKeyDown}
          onKeyPress={this.props.onKeyPress}
          onKeyUp={this.props.onKeyUp}
          readOnly={this.props.isReadOnly}
          required={this.props.required}
        />
      );
    }
    return (
      <input
        className={cx(classes.textInput)}
        ref={(ref: any) => {
          this.inputRef = ref;
        }}
        value={this.state.value}
        placeholder={this.props.placeholder}
        autoComplete={this.props.autoComplete}
        autoFocus={this.props.autoFocus}
        disabled={this.props.disabled}
        id={this.props.id}
        name={this.props.name}
        onBlur={this._handleOnBlur}
        onChange={this._handleOnChange}
        onFocus={this._handleOnFocus}
        onKeyDown={this.props.onKeyDown}
        onKeyPress={this._handleOnKeyPress}
        onKeyUp={this.props.onKeyUp}
        readOnly={this.props.isReadOnly}
        required={this.props.required}
        type={this.props.type}
        maxLength={this.props.maxlength}
      />
    );
  }

  _renderClearIcon() {
    const { classes } = this.props;
    if (!this.state.value) {
      return null;
    }
    return (
      <span className={cx(classes.xIcon)} onClick={this._clearTextField}>
        <i className="icon icon-close" />
      </span>
    );
  }

  _renderShowPasswordIcon() {
    const { classes } = this.props;
    if (this.props.type !== 'password' || !this.state.value) {
      return null;
    }

    if (this.state.showingPassword) {
      return (
        <span
          onClick={this._hidePassowrd}
          className={cx(classes.eyeIcon, 'show')}>
          <i className={'icon icon-show'} />
        </span>
      );
    }
    return (
      <span onClick={this._showPassowrd} className={cx(classes.eyeIcon)}>
        <i className={'icon icon-show'} />
      </span>
    );
  }

  render() {
    let {
      classes,
      label,
      error,
      showErrorMessage,
      showClearIcon,
      extraLinkWithLabel,
      disabled,
      isReadOnly,
      multiline,
    } = this.props;
    const wrapperClass = cx(classes.textInputWrapper, {
      'top-border-radius': this.props.applyTopBorderRadius,
      'bottom-border-radius': this.props.applyBottomBorderRadius,
      'no-border-radius': this.props.noBorderRadius,
      focus: this.state.isFocused || this.state.value,
      'is-filled': Boolean(this.state.value),
    });
    const componentClass = cx(classes.component, {
      error: Boolean(error),
    });
    const errorClass = cx(classes.error);

    return (
      <ErrorBoundary>
        <div className={componentClass}>
          {(Boolean(label) || Boolean(extraLinkWithLabel)) && (
            <FieldLabel
              label={label}
              extraLinkWithLabel={extraLinkWithLabel}
              onExtraLinkClicked={this.props.onExtraLinkClicked}
              classes={{ label: classes.label }}
            />
          )}
          <div className={wrapperClass}>
            {this._renderIcon()}
            {this._renderTextInput()}
            {showClearIcon &&
              !disabled &&
              !isReadOnly &&
              !multiline &&
              this._renderClearIcon()}
            {!disabled && !isReadOnly && this._renderShowPasswordIcon()}
          </div>
          {Boolean(error) &&
            showErrorMessage && <div className={errorClass}>{error}</div>}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(TextField);
