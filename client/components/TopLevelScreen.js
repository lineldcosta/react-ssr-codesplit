import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import { connect } from 'react-redux'
import styles from './TopLevelScreen.css'

import PrimaryNav from './PrimaryNav'

const mapStateToProps = ({ navigation }) => ({ navigation })

const TopLevelScreen = ({ navigation, children }) => (
  <div className={styles.screen}>
    <div className={styles.content}>
      {children}
    </div>
    <PrimaryNav currentPlace={navigation[0].type} />
  </div>
)

export default connect(mapStateToProps)(TopLevelScreen)
