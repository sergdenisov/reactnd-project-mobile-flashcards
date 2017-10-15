import * as api from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export const getDecks = () => dispatch =>
  api.fetchDecks().then(decks => dispatch(receiveDecks(decks)));

export function receiveDeck(deck) {
  return {
    type: RECEIVE_DECK,
    deck,
  };
}

export const addDeck = deck => dispatch =>
  api.addDeck(deck).then(() => dispatch(receiveDeck(deck)));
