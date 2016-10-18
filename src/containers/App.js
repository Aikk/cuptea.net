import React, { Component } from 'react'
import { connect } from 'react-redux'


// Import Containers
import Welcome from 'containers/Welcome'
import Header from 'containers/Header'
import Footer from 'containers/Footer'


class App extends Component {
  render() {
    return (
      <section className="app">
        <Welcome />
        <Header />
        <Footer />
      </section>
    )
  }
}

export default connect()(App);
