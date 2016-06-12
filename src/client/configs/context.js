import Meteor, { Accounts, ReactiveDict } from 'react-native-meteor';
import { Actions } from 'react-native-router-flux';
/*import * as Collections from 'lib/collections';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';
*/
export default function () {
  return {
    Meteor,
    Accounts,
    Actions,
    //FlowRouter,
    //Collections,
    LocalState: new ReactiveDict()
  };
}
