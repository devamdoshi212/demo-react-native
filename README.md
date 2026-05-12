# Demo React Native App

A basic React Native application built with Expo featuring three screens with navigation.

## Project Structure

```
demo-react-native/
├── App.js                 # Main app component with navigation setup
├── app.json              # Expo configuration
├── package.json          # Project dependencies
├── .babelrc             # Babel configuration
├── screens/
│   ├── SplashScreen.js      # Splash screen (shown for 2 seconds on startup)
│   ├── WelcomeScreen.js     # Welcome screen with navigation to register
│   └── RegisterScreen.js    # Registration screen
└── README.md            # This file
```

## Screens

1. **SplashScreen**: Displays app name and loading message, automatically navigates to Welcome screen after 2 seconds
2. **WelcomeScreen**: Introduction screen with "Get Started" button to navigate to Register
3. **RegisterScreen**: Registration screen with form placeholder

## Installation

1. Ensure you have Node.js installed
2. Install Expo CLI globally:

   ```bash
   npm install -g expo-cli
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

## Running the App

### Start Expo Dev Server

```bash
npm start
```

### Run on Android

```bash
npm run android
```

### Run on iOS

```bash
npm run ios
```

### Run on Web

```bash
npm run web
```

## Technologies

- **React Native**: Mobile app framework
- **Expo**: Development platform for React Native
- **React Navigation**: Navigation library for managing app screens

## Next Steps

- Customize the screens with your UI/UX design
- Add form fields to RegisterScreen
- Implement authentication logic
- Add more screens as needed
