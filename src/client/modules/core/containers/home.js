import { useDeps, composeAll } from 'mantra-core';
import { composeWithTracker } from 'react-native-meteor';

import L from '../../core/components/loading';
import E from '../../core/components/error';

import Home from '../components/home';

export const composer = ({context}, onData) => {
  const { Meteor } = context();

  onData(null, {});

};

export const depsMapper = (context, actions) => ({
  context: () => context,
  Actions: context.Actions
});

export default composeAll(
  composeWithTracker(composer, L, E),
  useDeps(depsMapper)
)(Home);
