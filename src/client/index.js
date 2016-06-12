import {createApp} from 'mantra-core';
import userModule from "./modules/user";

import Meteor from 'react-native-meteor';
import initContext from './configs/context';
import appConfig from './configs/app';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(userModule);
app.init()


Meteor.connect(appConfig.remote);