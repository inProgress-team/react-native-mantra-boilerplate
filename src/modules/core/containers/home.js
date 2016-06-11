import React from 'react';
import { View } from 'react-native';
const errorLoading = <View />;

import { useDeps, composeAll, composeWithTracker } from 'mantra-core';


import Home from '../components/home';

export const composer = ({context}, onData) => {
  // const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, ()=>errorLoading, ()=>errorLoading),
  useDeps(depsMapper)
)(Home);
