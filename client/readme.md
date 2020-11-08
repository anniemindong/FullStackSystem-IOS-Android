# Steps to build the frontend: Client
## Initialize Project
```
expo init client
```
### Open it in VS Code
### Open terminal, in the client folder
```
expo start
```
### ERROR:
expo version is too old.

Solution:
```
expo client:install:ios
```

## Create screens folder
- LoginScreen.js

- RegisterScreen.js

- HomeScreen.js

## install navigation
```
npm install @react-navigation/native
```
```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
```
npm install @react-navigation/stack
```
### ERROR:
 undefined Unable to resolve module `react-native` from `node_modules/expo/build/launch/RootErrorBoundary.js`: react-native could not be found within the project or in these directories:
  node_modules

Solution:
```
rm -rf node_modules
```
```
npm install
```
```
expo start
```  
## create navigation folder
create and build AppNavigation.js
## screens
### login screen
build login form using formik, install yup for validation.Write the code.
```
npm install formik yup
``` 

### register screen
Copy LoginScreen and paste, then change the code

## After building the backend, come back to frontend
```
npm install redux react-redux redux-thunk redux-devtools-extension
```