import React from 'react';
import { AppRegistry, Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from './containers/home';

export default function(injectDeps) {

  const App = () => (
    <Router sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home"/>
      </Scene>
    </Router>
  );

  const AppCtx = injectDeps(App);
  AppRegistry.registerComponent('App', () => AppCtx);
}
