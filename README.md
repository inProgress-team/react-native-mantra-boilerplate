# react-native-mantra-boilerplate
A react-native boilerplate based on Meteor/Mantra

## Features

* Follows [Mantrajs specification](https://kadirahq.github.io/mantra/)
* :tada Fully works with [Mantrajs Atom Package](https://github.com/mantrajs/mantrajs-atom-package) (*)

## Installation

* npm install
* Change the IP in `src/client/context/app.js` by your computer address
* Run your react-native project

## Includes

* [react-native-meteor](https://github.com/inProgress-team/react-native-meteor) : Meteor client
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) : Handles your routes
* [tcomb-form-native](https://github.com/gcanti/tcomb-form-native)

### Commandes

* npm run test : WIP
* npm run lint : lint your with eslint
* npm run lintfix : automatically fix your code

### Routes

Routes are defined in core module (in `src/modules/core/routes.js`)


## Informations

* (*) You may need to replace `if entry.expand` to `if entry and entry.expand` in ~/.atom/packages/mantrajs/lib/directoryHandler.coffee if you get the `Cannot read property of expand of undefined`. See https://github.com/mantrajs/mantrajs-atom-package/pull/32