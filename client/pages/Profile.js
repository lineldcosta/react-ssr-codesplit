import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import SecondaryNav from '../components/SecondaryNav'

const Profile = () => (
  <div>
    <SecondaryNav
      tabs={[
        {
          name: 'profile'
        },
        {
          name: 'drafts'
        },
        {
          name: 'bookmarks'
        }
      ]}
    />

  </div>
)

export default Profile
