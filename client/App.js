import React, { Component } from 'react'
import { connect } from 'react-redux'
import universal from 'react-universal-component'
import styles from './App.css'
import TopLevelScreen from './components/TopLevelScreen'
import ModalScreen from './components/ModalScreen'

const mapStateToProps = state => {
  return {
    random: Math.random(),
    navigation: state.navigation
  }
}
const mapDispatchToProps = dispatch => ({})

const HomePage = universal(
  () => import(/* webpackChunkName: 'Home' */ './pages/Home'),
  {
    resolve: () => require.resolveWeak('./pages/Home'),
    chunkName: 'Home',
    minDelay: 100
  }
)

const ProfilePage = universal(
  () => import(/* webpackChunkName: 'Profile' */ './pages/Profile'),
  {
    resolve: () => require.resolveWeak('./pages/Profile'),
    chunkName: 'Profile',
    minDelay: 100
  }
)

const ArticlePage = universal(
  () => import(/* webpackChunkName: 'Article' */ './pages/Article'),
  {
    resolve: () => require.resolveWeak('./pages/Article'),
    chunkName: 'Article',
    minDelay: 100
  }
)

const getPlaceComponent = ({ place, params }, key) => {
  let component = null
  switch (place) {
    case 'home':
      component = <HomePage key={key} {...params} />
      break
    case 'profile':
      component = <ProfilePage key={key} {...params} />
      break
    case 'article':
      component = <ArticlePage key={key} {...params} />
      break
    default:
      component = <div key={key}>404</div>
  }
  return params.__modal
    ? <ModalScreen key={key}>{component}</ModalScreen>
    : <TopLevelScreen key="top">{component}</TopLevelScreen>
}

const App = ({ navigation }) => {
  return (
    <div className={styles.root}>
      {navigation.map((place, idx) =>
        getPlaceComponent(place, `${place.place}_${idx}`)
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
