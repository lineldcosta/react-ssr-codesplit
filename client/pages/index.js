/**
     *
     *  DONT EDIT THIS FILE: IT WILL BE OVERWRITTEN BY WEBPACK NEXT TIME YOU SAVE ANYTHING!
     *
     */

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

export const create = universal(
  () =>
    import(
      /* webpackChunkName: 'Create' */ '/Users/steve/dev/NewsSocial/newssocial/client/pages/Create.js'
    ),
  {
    resolve: () =>
      require.resolveWeak(
        '/Users/steve/dev/NewsSocial/newssocial/client/pages/Create.js'
      ),
    chunkName: 'Create',
    minDelay: 100
  }
)

export const groups = universal(
  () =>
    import(
      /* webpackChunkName: 'Groups' */ '/Users/steve/dev/NewsSocial/newssocial/client/pages/Groups.js'
    ),
  {
    resolve: () =>
      require.resolveWeak(
        '/Users/steve/dev/NewsSocial/newssocial/client/pages/Groups.js'
      ),
    chunkName: 'Groups',
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

export const notifications = universal(
  () =>
    import(
      /* webpackChunkName: 'Notifications' */ '/Users/steve/dev/NewsSocial/newssocial/client/pages/Notifications.js'
    ),
  {
    resolve: () =>
      require.resolveWeak(
        '/Users/steve/dev/NewsSocial/newssocial/client/pages/Notifications.js'
      ),
    chunkName: 'Notifications',
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
