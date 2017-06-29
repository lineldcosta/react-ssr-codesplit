import React from 'react'
import Link from 'redux-first-router-link'

import styles from './SecondaryNav.css'

const SecondaryNav = ({ tabs }) => (
  <ol className={styles.bar}>
    {tabs.map(t => (
      <li key={t.name}><Link href={t.href || t.name}>{t.name}</Link></li>
    ))}
  </ol>
)

export default SecondaryNav
