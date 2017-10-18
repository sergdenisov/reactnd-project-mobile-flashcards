import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(
    results => (results ? JSON.parse(results) : []),
  );
}

export function addDeck(deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const decks = results ? JSON.parse(results) : [];

    decks.push(deck);

    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  });
}

export function changeDeck(deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const decks = JSON.parse(results).map(
      item => (item.title === deck.title ? deck : item),
    );

    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  });
}
