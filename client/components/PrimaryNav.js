import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import { FormattedMessage } from 'react-intl'

import styles from './PrimaryNav.css'
import routes from '../routes'

const PrimaryNav = ({ currentPlace }) => (
  <ol className={styles.bar}>
    {Object.getOwnPropertyNames(routes).reduce((result, key) => {
      const route = routes[key]
      if (route.topLevel) {
        result.push(
          <li key={key}>
            <Link href={route.path}>
              <FormattedMessage id={`navigation.${key}`} />
            </Link>
          </li>
        )
      }
      return result
    }, [])}
  </ol>
)

export default PrimaryNav
