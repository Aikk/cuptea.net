import 'styles/App.scss';
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Welcome from './Welcome';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <section className="app">
        <section className="welcome">
          <Welcome />
        </section>
        <section className="home">
          <Home />
        </section>
      </section>
    );
  }
}

export default App;
