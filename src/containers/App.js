import 'styles/base.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import Components
import Welcome from 'containers/Welcome'


class App extends Component {
  render() {
    return (
      <section className="app">
        <Welcome />
      </section>
    )
  }
}

export default connect()(App);
