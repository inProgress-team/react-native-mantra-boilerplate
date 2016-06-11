import Meteor, { Accounts } from 'react-native-meteor';
import { Scene, Router } from 'react-native-router-flux';
import { AppRegistry } from 'react-native';
/*import * as Collections from 'lib/collections';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';
*/
export default function () {
  return {
    Meteor,
    AppRegistry,
    Scene,
    Router,
    //FlowRouter,
    //Collections,
    //LocalState: new ReactiveDict(),
    //Tracker,
    Accounts
  };
}
