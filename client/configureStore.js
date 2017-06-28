import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'
import routes from '../common/routes'
import navigation from '../common/state/reducers/navigation'

export default function configureStore(path) {
  const history = createHistory()

  const { reducer, middleware, enhancer, thunk } = connectRoutes(
    history,
    routes
  ) // notice `thunk`
  const rootReducer = combineReducers({
    location: reducer,
    navigation
  })
  const store = createStore(
    rootReducer,
    compose(enhancer, applyMiddleware(middleware))
  )

  return store
}
