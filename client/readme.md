# Client
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
creat AppNavigation.js
## Loginscreen.js
build form using formik, install yup for validation.
```
npm install formik yup
``` 
