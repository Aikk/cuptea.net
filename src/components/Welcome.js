import React, { Component } from 'react';
import { Link } from 'react-router';

class Welcome extends Component {
  hideSiteTZH() {

  }

  resetNavigation() {

  }

  render() {
    let siteTENCN = 'site-t-en',
        siteTZHCN = 'site-t-zh';



    return (
      <nav className="nav">
        <h2 className="site-t-en">Live for love and love for life.</h2>
        <h2 className="site-t-zh">唯爱与生活不可辜负</h2>
        <ul className="list-link">
          <li className="link" onClick={this.handleClickBlog}>Blog</li>
          <li className="link">Github</li>
          <li className="link">Weibo</li>
        </ul>
      </nav>
    );
  }
}

export default Welcome;
