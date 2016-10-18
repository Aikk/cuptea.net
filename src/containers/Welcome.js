import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import Actions
import { enterBlog, enterGithub } from 'actions/index'

import WelcomeNavLink from 'components/WelcomeNavLink'


class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  handleEnterBlog(e) {
    this.props.onEnterBlog()
  }

  render() {
    return (
      <section className="welcome">
        <nav className="nav">
          <h2 className="site-l">Live for love and love for life.</h2>
          <h1 className="site-t">唯爱与生活不可辜负</h1>
          <ul className="nav-link">
            {/* <li className="link" onClick={this.handleEnterBlog}>Blog</li>
            <li className="link" onClick={this.handleEnterGithub}>Github</li> */}
            <WelcomeNavLink />
          </ul>
        </nav>
      </section>
    )
  }
}

const mapStateToProps = state => {
  const { isLogo } = state

  return {
    isLogo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEnterBlog: () => dispatch(enterBlog()),
    onEnterGithub: () => dispatch(enterGithub())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
