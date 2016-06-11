import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import { View } from 'react-native';

import Home from '../components/home';

export const composer = ({context}, onData) => {
  // const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, ()=><View />, ()=><View />),
  useDeps(depsMapper)
)(Home);
