import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'
import routes from './routes'
import reducers from './state/reducers'

export default function configureStore(path) {
  const history = createHistory()

  const { reducer, middleware, enhancer, thunk } = connectRoutes(
    history,
    routes
  ) // notice `thunk`

  const store = createStore(
    reducers({location: reducer}),
    compose(enhancer, applyMiddleware(middleware))
  )

  return store
}
