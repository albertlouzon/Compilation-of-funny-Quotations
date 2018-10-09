import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import Deck from '../src/deck';
import { Card,Button } from 'react-native-elements';
import { createStackNavigator, navigationOptions } from 'react-navigation';
import {favData} from '../src/favorites_data'


const backgroundColorsLight = ['#ffac33','#FFB3CF','#00ced1','#8bc34a','#cddc39','#f44336','#26a69a', '#e64a19']
const backgroundColorsDark = ['#571C3C','#110c63','#176600','#9b2e2e','#96660d','#7e1a82']

export const DATA = [
  [1,'azlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekaz' ],
  [2,"azlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekaz 2"],
  [3,"azlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekazazlmkezaeaokeazoekaz 3"],
];



export default class DECK_SCREEN extends React.Component {
constructor(props) {
  super(props)

  this.state = {
  }
}

    static navigationOptions = ({ navigation }) => {
        return {
          title: "Citations",
          headerRight: (
            <Button
              onPress={()=>{navigation.navigate('Fav')}}
              title="Favoris"
              color="#fff"
            />
          ),
        };
      };

     
     

  renderCard(item) {
    let lightOrDark = Math.floor((Math.random() * 2)+1);
    let theme
    let textColor
    if(lightOrDark==1){theme=backgroundColorsLight;textColor='black'}
    else{theme=backgroundColorsDark;textColor='white'}
    let randomNum = Math.floor((Math.random() * theme.length));
   
    return (
      <Card
        key={item}
        containerStyle = {{backgroundColor:theme[randomNum],height:"150%",display:'flex',justifyContent:'center'}}
      >
        <Text style={{ marginBottom: 10, textAlign:'center', color : textColor, marginHorizontal:'10%'}}>
         {item}
        </Text>
        
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="Cette liste est terminée">
        <Text style={{ marginBottom: 10 }}>
          Alors, ca vous a plus ?
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="J'en veux encore!!!"
          onPress={()=>{this.renderCard()}}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});
