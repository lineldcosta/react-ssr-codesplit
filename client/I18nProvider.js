import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import flatten from './i18n/flatten'

export const DEFAULT_LANGUAGE = 'en'
export const AVAILABLE_LANGUAGES = ['en', 'ar'] // todo: add kurdish
// todo: support different language-sets per domain?
// todo: support overriding translations per domain

class I18nProvider extends Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(props) {
    return this.props.language !== props.language
  }
  render() {
    const { children, language, translations } = this.props
    return (
      <IntlProvider locale={language} messages={translations}>
        {React.cloneElement(children, {
          directionality: translations.directionality
        })}
      </IntlProvider>
    )
  }
}

const chooseLanguage = (user, browserLanguage) => {
  let language = DEFAULT_LANGUAGE
  if (user && user.language) {
    language = user.language // assuming we'll have a language property on the user ...
  }
  if (browserLanguage) {
    if (AVAILABLE_LANGUAGES.find(lang => lang === browserLanguage)) {
      language = browserLanguage
    }
  }
  return language
}

const mapStateToProps = (state, props) => {
  const { user } = state
  const language = chooseLanguage(user, props.browserLanguage)
  const translations = flatten(require('./i18n/' + language).default)
  return {
    language: language,
    translations: translations
  }
}

export default connect(mapStateToProps, undefined, undefined, { pure: false })(
  I18nProvider
)
