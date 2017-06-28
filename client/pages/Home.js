import React, { Component } from 'react'
import Link from 'redux-first-router-link'

const Home = () => (
  <div>
    <Link href="/article/123">Article</Link>
    <Link href="/profile">Profile</Link>
  </div>
)

export default Home
