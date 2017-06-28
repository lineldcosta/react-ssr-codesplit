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
  tl_home: {
    path: '/',
    thunk: async (dispatch, getState) => {
      /*
      e.g. ...

      const { slug } = getState().location.payload
      const data = await fetch(`/api/entity/${slug}`)
      const entity = await data.json()
      const action = { type: 'ENTITY_FOUND', payload: { entity } } // you handle this action type

      dispatch(action)
      */
    }
  },
  tl_notifications: '/notifications',
  tl_create: '/create',
  tl_groups: '/groups',
  tl_profile: '/profile',
  modal_article: {
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
