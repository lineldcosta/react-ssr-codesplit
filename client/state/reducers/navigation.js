const DEFAULT_PLACE = {
  type: 'home',
  params: {},
  href: {
    type: 'home'
  }
}

const createPlace = (action, location) => {
  console.log('createPlace', action, location)
  return {
    place: action.type,
    params: action.payload,
    href: {
      type: location.type,
      payload: location.payload
    }
  }
}

const removeModal = from => {
  const copy = Object.assign({}, from)
  delete copy.__modal
  return copy
}

const deepEquals = (a, b) => {
  return JSON.stringify(removeModal(a)) === JSON.stringify(removeModal(b))
}

const navigation = (state = [DEFAULT_PLACE], action = {}) => {
  if (action && action.meta && action.meta.location) {
    const location = action.meta.location.current
    if (state.length > 1) {
      const up = state[state.length - 2].href
      if (
        location.type === up.type &&
        deepEquals(location.payload, up.payload)
      ) {
        state.pop()
        state[state.length - 1] = createPlace(action, location)
      } else {
        if (action.payload && action.payload.__modal) {
          state.push(createPlace(action, location))
        } else {
          state[state.length - 1] = createPlace(action, location)
        }
      }
    } else {
      if (action.payload && action.payload.__modal) {
        state.push(createPlace(action, location))
      } else {
        state[state.length - 1] = createPlace(action, location)
      }
    }
  }
  return state
}

export default navigation
