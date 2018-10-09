import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FavScreen from './screens/favorites_screen'
import DECK_SCREEN from './screens/deck_screen';
import { Font } from 'expo';

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
  componentDidMount() {
    Font.loadAsync({
      'rubik': require('./assets/fonts/Rubik/Rubik-Black.ttf'),
    });
    console.log('c fait')
  }
  render() {
    return (
      <RootStack/>
    );
  }
}


