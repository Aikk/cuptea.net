import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import Actions
import { enterBlog, enterGithub } from 'actions/index'

import WelcomeCard from 'components/WelcomeCard'


class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  handleEnterBlog(e) {
    this.props.onEnterBlog()
  }

  render() {
    return (
      <WelcomeCard />
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
