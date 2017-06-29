import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import ModalLink from '../components/ModalLink'
import SecondaryNav from '../components/SecondaryNav'

const Home = () => (
  <div>
    <SecondaryNav
      tabs={[
        {
          name: 'activity'
        },
        {
          name: 'news'
        },
        {
          name: 'events'
        }
      ]}
    />
    <ModalLink to="article" params={{ id: '123' }}>Article</ModalLink>
  </div>
)

export default Home
