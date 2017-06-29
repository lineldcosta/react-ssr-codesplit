import React, { Component } from 'react'
import ModalLink from '../components/ModalLink'
import SecondaryNav from '../components/SecondaryNav'

const Article = ({ id, close }) => (
  <div>
    <SecondaryNav
      tabs={[
        {
          name: 'close',
          href: close
        }
      ]}
    />
    <h1>Article {id}</h1>
  </div>
)

export default Article
