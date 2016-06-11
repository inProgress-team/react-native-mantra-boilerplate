import React from 'react';
import { View } from 'react-native';
const errorLoading = <View />;

import { useDeps, composeAll } from 'mantra-core';
import { composeWithTracker } from 'react-native-meteor';


import Home from '../components/home';

export const composer = ({context}, onData) => {
  const { Meteor } = context();
  console.log(Meteor.status());
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, ()=>errorLoading, ()=>errorLoading),
  useDeps(depsMapper)
)(Home);
