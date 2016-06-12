import { AppRegistry } from 'react-native';

import Routes from '../../configs/routes';

export default injectDeps => {
  const RoutesCtx = injectDeps(Routes);
  AppRegistry.registerComponent('App', () => RoutesCtx);
};