import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from '../modules/core/containers/home';

export default class Routes extends Component {
  render() {
    return (
      <Router sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home"/>
        </Scene>
      </Router>
    );
  }
}