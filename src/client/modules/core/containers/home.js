import { useDeps, composeAll } from 'mantra-core';
import { composeWithTracker } from 'react-native-meteor';

import L from '../../core/components/loading';
import E from '../../core/components/error';

import Home from '../components/home';

export const composer = ({context}, onData) => {
  const { Meteor } = context();


  setTimeout(()=>{
    onData(new Error('dzad'), {});
  }, 2000);


  setTimeout(()=>{
    onData(null, {});
  }, 4000);

  console.log(Meteor.status());
  if(false) {
      onData(new Error('dzad'), {});
  }




};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, L, E),
  useDeps(depsMapper)
)(Home);
