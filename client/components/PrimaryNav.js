import React, { Component } from 'react'
import Link from 'redux-first-router-link'

import styles from './PrimaryNav.css'

const PrimaryNav = ({ currentPlace }) => (
  <ol className={styles.bar}>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/notifications">Notifications</Link></li>
    <li><Link href="/create">Create</Link></li>
    <li><Link href="/groups">Groups</Link></li>
    <li><Link href="/profile">Profile</Link></li>
  </ol>
)

export default PrimaryNav
