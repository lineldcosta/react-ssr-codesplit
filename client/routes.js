const loadArticle = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id,
        title: 'foo bar'
      })
    }, 500)
  })

export default {
  home: {
    path: '/',
    topLevel: true
  },
  notifications: {
    path: '/notifications',
    topLevel: true
  },
  create: {
    path: '/create',
    topLevel: true
  },
  groups: {
    path: '/groups',
    topLevel: true
  },
  profile: {
    path: '/profile',
    topLevel: true
  },
  article: {
    path: '/article/:id',
    thunk: async (dispatch, getState) => {
      const { id } = getState().location.payload
      const data = await loadArticle(id)
      dispatch({
        type: 'ARTICLE_LOADED',
        payload: data
      })
    }
  }
}
