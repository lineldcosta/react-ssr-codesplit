import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import { connect } from 'react-redux'
import { closeModal } from '../../common/state/actions/navigation'

const mapStateToProps = ({ navigation }) => ({ navigation })
const mapDispatchToProps = dispatch => ({ close: () => dispatch(closeModal()) })

const Article = ({close}) => (
  <div>
    <h1>Article</h1>
    <a onClick={close}>Close</a>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Article)
