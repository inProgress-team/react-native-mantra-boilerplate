import { useDeps, composeAll } from 'mantra-core';
import { composeWithTracker } from 'react-native-meteor';

import Login from '../components/login.jsx';


export const composer = ({context}, onData) => {
  const { Meteor } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
