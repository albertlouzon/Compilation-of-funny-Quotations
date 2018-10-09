import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FavScreen from './screens/favorites_screen'
import DECK_SCREEN from './screens/deck_screen';

const RootStack = createStackNavigator(
  {
    Deck: DECK_SCREEN,
    Fav : FavScreen
  },
  {
    initialRouteName: 'Deck',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#e64a19',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  
);

 export default class App extends React.Component {

  render() {
    return (
      <RootStack/>
    );
  }
}


