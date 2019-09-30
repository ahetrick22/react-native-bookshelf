import React from 'react';
import HomeScreen from './components/HomeScreen';
import LibraryScreen from './containers/LibraryScreen';
import BrowseScreen from './containers/BrowseScreen';
import {createAppContainer, NavigationContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
import {Store} from './Store';
import {Provider} from 'react-redux';

const MainNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Library: {screen: LibraryScreen},
    Browse: {screen: BrowseScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: () => {
        const {routeName} = navigation.state;
        let iconName: string = '';
        switch (routeName) {
          case 'Home':
            iconName = iconType.home;
            break;
          case 'Library':
            iconName = iconType.library;
            break;
          case 'Browse':
            iconName = iconType.browse;
            break;
        }
        return <Icon name={iconName} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const App = (): JSX.Element => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

const Navigation: NavigationContainer = createAppContainer(MainNavigator);

export default App;

const iconType = {
  home: 'home',
  browse: 'search',
  library: 'book',
};
