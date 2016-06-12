import { useDeps, composeAll } from 'mantra-core';
import { composeWithTracker } from 'react-native-meteor';

import L from '../../core/components/loading';
import E from '../../core/components/error';

import Login from '../components/login';

export const composer = ({context}, onData) => {
  const { Meteor, LocalState } = context();

  onData(null, {error: LocalState.get('LOGIN_ERROR'), success: LocalState.get('LOGIN_SUCCESS')});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  login: actions.account.login
});

export default composeAll(
  composeWithTracker(composer, L, E),
  useDeps(depsMapper)
)(Login);
