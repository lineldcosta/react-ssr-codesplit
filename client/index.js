import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './App'
import configureStore from './configureStore'
import I18nProvider, { DEFAULT_LANGUAGE } from './I18nProvider'

const store = configureStore()

const getBrowserLanguage = () => {
  return (navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage ||
    DEFAULT_LANGUAGE)
    .split('-')[0]
}

const render = async App =>
  ReactDOM.render(
    <Provider store={store}>
      <I18nProvider browserLanguage={getBrowserLanguage()}>
        <AppContainer>
          <App />
        </AppContainer>
      </I18nProvider>
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./App.js', () => {
    const App = require('./App').default
    render(App)
  })
}

render(App)
