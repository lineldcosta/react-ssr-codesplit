import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createMemoryHistory'
import { connectRoutes } from 'redux-first-router'
import routes from '../client/routes'
import reducers from '../client/state/reducers'

export default async function configureStore(path) {
  const history = createHistory({
    initialEntries: [path] // match initial route to express path
  })

  const { reducer, middleware, enhancer, thunk } = connectRoutes(
    history,
    routes
  ) // notice `thunk`

  const store = createStore(
    reducers({location:reducer}),
    compose(enhancer, applyMiddleware(middleware))
  )

  // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
  // await Promise.all([ store.dispatch(myThunkA), store.dispatch(myThunkB) ])
  await thunk(store)

  return store
}
