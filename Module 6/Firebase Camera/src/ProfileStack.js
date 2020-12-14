import { createStackNavigator } from 'react-navigation';
import { ProfileScreen } from './screens';
import transitionConfig from './common/TransitionConfig';

const navigationOptions = {
  headerTitle: 'Profile',
  headerTitleStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },
};

export default createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions,
    },
  },
  {
    transitionConfig,
  }
);
