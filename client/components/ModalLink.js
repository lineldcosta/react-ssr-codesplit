import React from 'react'
import Link from 'redux-first-router-link'

const ModalLink = ({ to, params, children }) => (
  <Link
    href={{
      type: to,
      payload: Object.assign({}, { __modal: true }, params)
    }}
  >
    {children}
  </Link>
)

export default ModalLink
