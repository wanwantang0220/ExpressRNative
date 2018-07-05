import {AppRegistry, YellowBox} from 'react-native';
import Root from './js/Root';
import DrawerPage from './js/DrawerPage';
import SplashPage from './js/SplashPage';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('ExpressRNative', () => Root);
