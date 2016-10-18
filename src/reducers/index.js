import 'babel-polyfill';

import { combineReducers } from 'redux'

import { ENTER_BLOG } from 'constants/ActionTypes'


const enterBlog = (state = {}, action) => {
  switch (action.type) {
    case ENTER_BLOG:
      return Object.assign({}, state, {
        isLogo: true
      });
    default:
      return state;
  }
}

const reducers = combineReducers({
  enterBlog
})

export default reducers;
