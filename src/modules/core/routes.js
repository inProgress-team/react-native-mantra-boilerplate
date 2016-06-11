import React from 'react';

import Home from './containers/home';

export default function(injectDeps, { AppRegistry, Scene, Router }) {

  const App = () => (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home"/>
      </Scene>
    </Router>
  );

  const AppCtx = injectDeps(App);
  AppRegistry.registerComponent('App', () => AppCtx);
}