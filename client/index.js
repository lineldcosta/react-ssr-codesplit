import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './App'
import configureStore from './configureStore'

const store = configureStore()

const render = async App =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
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
