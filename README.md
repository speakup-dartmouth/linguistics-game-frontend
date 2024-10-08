# 🗣 Linguistics Games Frontend

Linguistics Games, a.k.a. Speak Up, is an innovative gameified mobile app that invites users to play via voice-controlled mechanisms. They can choose a stance to respond to a variety of questions, as well as upvote and downvote other users' posts. With the user's consent, these voice samples are anonymized and aggregated together to form large-scale datasets, with whole new magnitudes of `N > 10,000`. The aim of this app is to empower every researcher with larger and more comprehensive datasets for richer hypotheses, and in particular cutting-edge sociolinguistic analysis. Ultimately, the impact of this app can stretch far beyond linguistics. Other fields like economics, sociology, anthropology all experience the same challenge of small sample sizes. This technique can inspire similar approaches in these other fields, and usher in a new era of computational research.

## Designs

[See project Figma](https://www.figma.com/file/rA2O0gfeSZ6mFjTjsPulWP/Linguistics-Games-22F)

## Architecture
### Tech Stack 🥞
The frontend for this application is built using [React Native](https://reactnative.dev/). Redux Toolkit is also used for state management and API requests. TypeScript is used throughout the frontend as well.

[Backend Repo](https://github.com/dali-lab/linguistics-games-backend)

### Packages 📦
* [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
* [react-native-modal-datetime-picker](https://www.npmjs.com/package/react-native-modal-datetime-picker)
* [@react-navigation](https://reactnavigation.org/)
* [react-native-loading-spinner-overlay](https://www.npmjs.com/package/react-native-loading-spinner-overlay)
* [react-native-dropdown-picker](https://www.npmjs.com/package/react-native-dropdown-picker)
* [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)
* [axios](https://github.com/axios/axios)

### Style

We are using [DALI's React-Native ESLint Configuration](https://gist.github.com/timofei7/c8df5cc69f44127afb48f5d1dffb6c84).

### File Structure

```
├──[Top Level]/                  # root directory
|  └──[App.tsx]                  # main App file
|  └──[src]/                     # source folder; hosts app assets and components
|     └──[assets]/               # assets folder; hosts app images and loading configuration
|     └──[components]/           # components folder; hosts individual components in separate folders
|     └──[lib]/                  # stores modules used across application, including constants, custom hooks, and styles
|     └──[navigation]/           # holds all navigation-related code, including types
|     └──[redux]/                # redux integration for communication with backend, including slices, hooks, and store
|     └──[screens]/              # hosts individual screens in subdirectories
|     └──[services]/             # contains services allowing for connection to api, s3, and local storage
|     └──[types]/                # types folder; specifies types and guards
|     └──[declarations.d.ts]     # declares special svg module
|  └──[patches]/                 # holds necessary patches, including to reduxjs toolkit, to fix compatibility with Expo
```

For more detailed documentation on our file structure and specific functions in the code, please refer to the project files themselves.

## Setup 
1. Clone repo by running `git clone https://github.com/dali-lab/linguistics-games-frontend.git` in your terminal and `cd linguistics-games-frontend`
2. Run `expo install` to install all of the necessary packages.
  * If you don't have expo installed, you can install it by following the instructions [here](https://docs.expo.dev/get-started/installation/)
  * You can also use `npx expo` instead of `expo` as a workaround to always use the most recent version of the Expo CLI.
3. Make sure you have the expo-cli installed. You can install it by running `npm install expo-cli --global`
4. Create a `.env` file with an `API_KEY` environment variable, which should match the API key set for the backend server.
5. To start the app locally, run `expo start`. 
  * Type `i` to run the app on an iOS simulator. You will need to have Xcode installed for this to work. To install Xcode, go [here](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
  * Type `a` to run the app on an Android emulator. You will need Android Studio installed for this step to work.


To access this app on other devices, download the [Expo Go](https://expo.dev/client) app and login using the Linguistics Games credentials. New builds can be created in the Expo Go app with the below command (after having installed the [EAS CLI](https://github.com/expo/eas-cli)). Replace "v1.0.0" with your version number.

```
eas update --branch dev --message "v1.0.0"
```

To connect to a local server in development, change the value of the `apiUrl` constant in `constants.ts` to point to `localhost`.

## Deployment 🚀
This app is deployed on Expo, under the account `linguistics.games@dali.dartmouth.edu`. Credentials and further instructions may be found in the official Handoff Document.

## Authors
* Tyler Vergho '23, Dev
* Isabella Hochschild '25, Dev

---
Designed and developed by [@DALI Lab](https://github.com/dali-lab)