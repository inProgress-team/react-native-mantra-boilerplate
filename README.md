# react-native-mantra-boilerplate
A react-native boilerplate based on Meteor/Mantra

### WARNING

* This is still alpha
* Please report any issue to this Github ;)

## Features

* Follows [Mantrajs specification](https://kadirahq.github.io/mantra/)
* :tada: Fully works with [Mantrajs Atom Package](https://github.com/mantrajs/mantrajs-atom-package) (*)
* Login / Logout

## Installation

* **Due to react-native-router-flux actual version, npm@3 is required**
* git clone https://github.com/inProgress-team/react-native-mantra-boilerplate.git your-project-name
* npm install
* Change the IP in `src/client/context/app.js` by your computer address running the meteor server.
* Run your react-native project.

## Includes

* [react-native-meteor](https://github.com/inProgress-team/react-native-meteor) : Meteor client.
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) : Handles your routes.
* [tcomb-form-native](https://github.com/gcanti/tcomb-form-native) : Handle your forms.
* [NativeBase](http://nativebase.io/) : UI styling for the purpose of showing a beautiful example. Feel free to remove it doesn't fit with you.
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) : multiple icons

### Commandes

* npm run test : WIP
* npm run lint : lint your with eslint
* npm run lintfix : automatically fix your code

### Routes

Routes are defined in core module (in `src/client/configs/routes.js`)


## Informations

* (*) You may need to replace `if entry.expand` to `if entry and entry.expand` in ~/.atom/packages/mantrajs/lib/directoryHandler.coffee if you get the `Cannot read property of expand of undefined`. See https://github.com/mantrajs/mantrajs-atom-package/pull/32



### TODO

- [ ] Add unit test for every component
- [ ] Add unit test for every containers
- [ ] Add unit test for every action

### TO THINK ABOUT (Please open an issue if you have ideas to help)

- [ ] More tests
- [ ] What to add ?

