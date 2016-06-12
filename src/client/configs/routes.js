import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from '../modules/core/containers/home';
import Login from '../modules/user/containers/login';

export default class Routes extends Component {
  render() {
    return (
      <Router sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}>
        <Scene key="root">
          <Scene key="home" initial={true} component={Home} title="Home"/>
          <Scene key="login" component={Login} title="Login"/>
        </Scene>
      </Router>
    );
  }
}