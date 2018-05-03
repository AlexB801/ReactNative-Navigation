'use strict'
import { StackNavigator } from 'react-navigation';

//screens
import TabOneScreenOne from './views/TabOneScreenOne';
import TabOneScreenTwo from './views/TabOneScreenTwo';

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenOne'
}

export default NavigatorTabOne = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
