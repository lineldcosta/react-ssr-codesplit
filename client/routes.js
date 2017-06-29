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
  home: '/',
  notifications: '/notifications',
  create: '/create',
  groups: '/groups',
  profile: '/profile',
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
