import React, { Component } from 'react'
import { connect } from 'react-redux'
import universal from 'react-universal-component'
import styles from './App.css'
import TopLevelScreen from './components/TopLevelScreen'
import ModalScreen from './components/ModalScreen'
import * as pages from './pages'

const mapStateToProps = state => {
  return {
    random: Math.random(),
    navigation: state.navigation
  }
}
const mapDispatchToProps = dispatch => ({})

const getPlaceComponent = ({ place, params }, key) => {
  let component = null
  if (pages[place]) {
    let Component = pages[place]
    component = <Component key={key} {...params} />
  } else {
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
