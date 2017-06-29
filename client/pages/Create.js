import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import ModalLink from '../components/ModalLink'
import SecondaryNav from '../components/SecondaryNav'

const Create = () => (
  <div>
    <SecondaryNav
      tabs={[
        {
          name: 'create'
        }
      ]}
    />
    <div>tada, create</div>
  </div>
)

export default Create
