const DEFAULT_TOP = 'home'

const navigation = (state = { top: DEFAULT_TOP }, action = {}) => {
  if (action.type === 'CLOSE_MODAL') {
    return { top: state.top || DEFAULT_TOP }
  }
  const navType = action.type.split('_')
  switch (navType[0]) {
    case 'tl':
      return {
        top: navType[1]
      }
    case 'modal':
      return {
        top: state.top || DEFAULT_TOP,
        modal: navType[1]
      }
    default:
      return state;
  }
}

export default navigation
