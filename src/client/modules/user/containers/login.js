import { useDeps, composeAll } from 'mantra-core';
import { composeWithTracker } from 'react-native-meteor';

import L from '../../core/components/loading';
import E from '../../core/components/error';

import Login from '../components/login';

export const composer = ({context}, onData) => {
  const { Meteor } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, L, E),
  useDeps(depsMapper)
)(Login);
