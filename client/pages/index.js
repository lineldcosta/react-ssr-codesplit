import universal from 'react-universal-component'

export const article = universal(
  () =>
    import(
      /* webpackChunkName: 'Article' */ '/Users/steve/dev/NewsSocial/newssocial/client/pages/Article.js'
    ),
  {
    resolve: () =>
      require.resolveWeak(
        '/Users/steve/dev/NewsSocial/newssocial/client/pages/Article.js'
      ),
    chunkName: 'Article',
    minDelay: 100
  }
)

export const home = universal(
  () =>
    import(
      /* webpackChunkName: 'Home' */ '/Users/steve/dev/NewsSocial/newssocial/client/pages/Home.js'
    ),
  {
    resolve: () =>
      require.resolveWeak(
        '/Users/steve/dev/NewsSocial/newssocial/client/pages/Home.js'
      ),
    chunkName: 'Home',
    minDelay: 100
  }
)

export const profile = universal(
  () =>
    import(
      /* webpackChunkName: 'Profile' */ '/Users/steve/dev/NewsSocial/newssocial/client/pages/Profile.js'
    ),
  {
    resolve: () =>
      require.resolveWeak(
        '/Users/steve/dev/NewsSocial/newssocial/client/pages/Profile.js'
      ),
    chunkName: 'Profile',
    minDelay: 100
  }
)
