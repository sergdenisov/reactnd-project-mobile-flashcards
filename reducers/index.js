import { combineReducers } from 'redux';
import { RECEIVE_DECKS, RECEIVE_DECK } from '../actions';

function decks(state = [], action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return [...state, ...action.decks];
    case RECEIVE_DECK:
      return [...state, action.deck];
    default:
      return state;
  }
}

export default combineReducers({ decks });
