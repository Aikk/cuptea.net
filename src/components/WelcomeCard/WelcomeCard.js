import styles from './WelcomeCard.scss'

import React, { Component } from 'react'


class WelcomeCard extends Component {
  render() {
    return (
      <section className={styles.welcome}>
        <nav className={styles.nav}>
          <h2 className={styles.en}>Live for love and love for life.</h2>
          <h1 className={styles.zh}>唯爱与生活不可辜负</h1>
          <ul className={styles.links}>
            <li className={styles.link}>Github</li>
            <li className={styles.link}>Weibo</li>
          </ul>
        </nav>
      </section>
    )
  }
}

export default WelcomeCard
