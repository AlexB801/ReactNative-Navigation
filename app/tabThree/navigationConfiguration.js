'use strict'
import { StackNavigator } from 'react-navigation';

//screens
import TabThreeScreenOne from './views/TabThreeScreenOne';
import TabThreeScreenTwo from './views/TabThreeScreenTwo';

const routeConfiguration = {
  TabThreeScreenOne: { screen: TabThreeScreenOne },
  TabThreeScreenTwo: { screen: TabThreeScreenTwo },
  TabThreeScreenThree: { screen: TabThreeScreenThree },
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabThreeScreenOne'
}

export default NavigatorTabThree = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
