import React from 'react';
import PropTypes from 'prop-types';
import { I18nProvider } from '@lingui/react';

export class I18nLoader extends React.Component {
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
    const catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
    `@kudoo/locale/${language}/messages.js`);
    this.setState(state => ({
      catalogs: {
        ...state.catalogs,
        [language]: catalog,
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
