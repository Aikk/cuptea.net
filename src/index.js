// Import css
import 'styles/App.scss'

import React from 'react'
import { render } from 'react-dom'

import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from 'store/index'

// Import routes
import routes from './routes'


let store = configureStore()

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));
