import "./configs/config";
import {createApp} from 'mantra-core';
import coreModule from "./modules/core/index";
import initContext from "./configs/context";
// init context
const context = initContext();
// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
