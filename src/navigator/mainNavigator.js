import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile31452Navigator from '../features/UserProfile31452/navigator';
import Tutorial31451Navigator from '../features/Tutorial31451/navigator';
import UserProfile31385Navigator from '../features/UserProfile31385/navigator';
import Maps31366Navigator from '../features/Maps31366/navigator';
import Settings31344Navigator from '../features/Settings31344/navigator';
import Settings31329Navigator from '../features/Settings31329/navigator';
import NotificationList31328Navigator from '../features/NotificationList31328/navigator';
import Maps31327Navigator from '../features/Maps31327/navigator';
import Camera31326Navigator from '../features/Camera31326/navigator';
import EmailAuth31294Navigator from '../features/EmailAuth31294/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile31452: { screen: UserProfile31452Navigator },
Tutorial31451: { screen: Tutorial31451Navigator },
UserProfile31385: { screen: UserProfile31385Navigator },
Maps31366: { screen: Maps31366Navigator },
Settings31344: { screen: Settings31344Navigator },
Settings31329: { screen: Settings31329Navigator },
NotificationList31328: { screen: NotificationList31328Navigator },
Maps31327: { screen: Maps31327Navigator },
Camera31326: { screen: Camera31326Navigator },
EmailAuth31294: { screen: EmailAuth31294Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
