import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import { connect } from 'react-redux'
import styles from './ModalScreen.css'

const mapStateToProps = ({ navigation }) => ({ navigation })

const ModalScreen = ({ navigation, children }) => {
  const up = navigation.length > 1
    ? navigation[navigation.length - 2].href
    : undefined
  return (
    <div className={styles.modal}>
      {React.cloneElement(React.Children.only(children), { close: up })}
    </div>
  )
}

export default connect(mapStateToProps)(ModalScreen)
