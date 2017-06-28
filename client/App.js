import React, { Component } from 'react'
import { connect } from 'react-redux'
import universal from 'react-universal-component'
import styles from './App.css'

const mapStateToProps = ({ navigation }) => ({ navigation })
const mapDispatchToProps = dispatch => ({})

const HomePage = universal(
  () => import(/* webpackChunkName: 'Home' */ './pages/Home'),
  {
    resolve: () => require.resolveWeak('./pages/Home'),
    chunkName: 'Home',
    minDelay: 100
  }
)

const ProfilePage = universal(
  () => import(/* webpackChunkName: 'Profile' */ './pages/Profile'),
  {
    resolve: () => require.resolveWeak('./pages/Profile'),
    chunkName: 'Profile',
    minDelay: 100
  }
)

const ArticlePage = universal(
  () => import(/* webpackChunkName: 'Example' */ './pages/Article'),
  {
    resolve: () => require.resolveWeak('./pages/Article'),
    chunkName: 'Article',
    minDelay: 100
  }
)

const top = ({ top }) => {
  switch (top) {
    case 'profile':
      return <ProfilePage />
    default:
      return <HomePage />
  }
}

const modal = ({ modal }) => {
  console.log(modal)
  switch (modal) {
    case 'article':
      return <ArticlePage />
    default:
      return null
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { navigation } = this.props
    console.log(JSON.stringify(this.props))
    return (
      <div>
        {top(navigation)}
        {modal(navigation)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// const UniversalExample = universal(() => import(/* webpackChunkName: 'Chunk1' */ './Example'), {
//   resolve: () => require.resolveWeak('./Example'),
//   chunkName: 'Chunk1',
//   minDelay: 500
// })

// export default class App extends React.Component {
//   // set `show` to `true` to see dynamic chunks served by initial request
//   // set `show` to `false` to test how asynchronously loaded chunks behave,
//   // specifically how css injection is embedded in chunks + corresponding HMR
//   state = {
//     show: true
//   }
//
//   componentDidMount() {
//     if (this.state.show) return
//
//     setTimeout(() => {
//       console.log('now showing <Example />')
//       this.setState({ show: true })
//     }, 1500)
//   }
//
//   render() {
//     return (
//       <div>
//         <h1 className={styles.title}>Hello World</h1>
//         {this.state.show && <UniversalExample />}
//         {!this.state.show && 'Async Component Not Requested Yet'}
//       </div>
//     )
//   }
// }
