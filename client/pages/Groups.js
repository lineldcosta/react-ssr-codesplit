import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import ModalLink from '../components/ModalLink'
import SecondaryNav from '../components/SecondaryNav'

const Groups = () => (
  <div>
    <SecondaryNav
      tabs={[
        {
          name: 'groups'
        },
        {
          name: 'discover'
        }
      ]}
    />
    <div>tada, groups</div>
  </div>
)

export default Groups
