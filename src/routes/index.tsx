import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Settings from '../pages/Settings';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#6d2177'},
    }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Settings" component={Settings} />
  </App.Navigator>
);

export default AppRoutes;
