import { combineReducers } from 'redux'
import navigation from './navigation'

const reducers = {
  navigation
}

export default (others) => {
  return combineReducers({
    ...reducers,
    ...others
  })
}
