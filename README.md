The final assessment project for Udacity's React Native course, developed by [React Training](https://reacttraining.com).

## How to start

```bash
git clone git@github.com:sergdenisov/reactnd-project-mobile-flashcards.git
cd reactnd-project-mobile-flashcards
yarn
yarn start
```

In the tested environment (`macOS Sierra Version 10.12.6`) I was also needed to run the following commands before `yarn start`:
```bash
sudo sysctl -w kern.maxfiles=5242880
sudo sysctl -w kern.maxfilesperproc=524288
```

## Available Scripts

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `yarn run ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). I also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

## Create React Native App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Testing

This project was tested in the following environment:

* `macOS Sierra 10.12.6`;
* `yarn v1.1.0`;
* `Android`: `Genymotion` emulator with `Google Pixel` device (`Android 7.1.0`, `API 25`, `Expo 1.20.1.109790`);
* `iOS`:
  * `iOS Simulator` with `iPhone 7` device (`iOS 10.3`, `Expo 1.20.0`);
  * `iPhone 8 64GB` physical device (`iOS 11.0.3`, `Expo 2.0.1.1010359`).
