import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import ModalLink from '../components/ModalLink'
import SecondaryNav from '../components/SecondaryNav'

const Notifications = () => (
  <div>
    <SecondaryNav
      tabs={[
        {
          name: 'notifications'
        }
      ]}
    />
    <div>tada, notifications</div>
  </div>
)

export default Notifications
