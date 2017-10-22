import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';
const NOTIFICATION_KEY = 'MobileFlashcards:notification';

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

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync,
  );
}

export function setLocalNotification(time) {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data !== null) {
        return;
      }

      Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
        if (status !== 'granted') {
          return;
        }

        Notifications.cancelAllScheduledNotificationsAsync();

        Notifications.scheduleLocalNotificationAsync(
          {
            title: 'Pass a Quiz!',
            body: "👋 don't forget to pass a quiz for today!",
            ios: { sound: true },
            android: {
              sound: true,
              priority: 'high',
              sticky: false,
              vibrate: true,
            },
          },
          { time, repeat: 'day' },
        );

        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
      });
    });
}
