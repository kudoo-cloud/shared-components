import React from 'react';
import PropTypes from 'prop-types';
import { I18nProvider } from '@lingui/react';
import {I18nLoaderProps} from './types'

const localeMapping = {
  de_DE: require('@kudoo/locale/de_DE/messages.js'),
  en_AU: require('@kudoo/locale/en_AU/messages.js'),
  en_CA: require('@kudoo/locale/en_CA/messages.js'),
  en_GB: require('@kudoo/locale/en_GB/messages.js'),
  en_IN: require('@kudoo/locale/en_IN/messages.js'),
  en_NZ: require('@kudoo/locale/en_NZ/messages.js'),
  en_SG: require('@kudoo/locale/en_SG/messages.js'),
  en_US: require('@kudoo/locale/en_US/messages.js'),
  fr: require('@kudoo/locale/fr/messages.js'),
  it_IT: require('@kudoo/locale/it_IT/messages.js'),
  ja_JP: require('@kudoo/locale/ja_JP/messages.js'),
  pt_BR: require('@kudoo/locale/pt_BR/messages.js'),
  zh_CN: require('@kudoo/locale/zh_CN/messages.js'),
};

export class I18nLoader extends React.Component<I18nLoaderProps, any> {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    language: 'en_AU',
  };

  state = {
    catalogs: {},
  };

  loadCatalog = async language => {
    this.setState(state => ({
      catalogs: {
        ...state.catalogs,
        [language]: localeMapping[language],
      },
    }));
  };

  componentDidMount() {
    this.loadCatalog(this.props.language);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { language } = nextProps;
    const { catalogs } = nextState;

    if (language !== this.props.language && !catalogs[language]) {
      this.loadCatalog(language);
      return false;
    }

    return true;
  }

  render() {
    const { children, language } = this.props;
    const { catalogs } = this.state;

    // Skip rendering when catalog isn't loaded.
    if (!catalogs[language]) {
      return null;
    }

    return (
      <I18nProvider language={language} catalogs={catalogs} missing="🚨">
        {children}
      </I18nProvider>
    );
  }
}
export default I18nLoader;
