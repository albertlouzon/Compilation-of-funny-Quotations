import React, { Component } from 'react'
import {Text, ScrollView} from 'react-native'
import { favData } from '../src/favorites_data'
import {Card} from 'react-native-elements'


export default class FavScreen extends Component {
    static navigationOptions = {
        title: 'Mes blagues préférées',
    };
    renderFav() {
        return (
            favData.map((favorite, i) => {
                return (
                    <Card
        key={favorite[0]}
        title={"Blague id"+favorite[0]} //its the joke id
      >
        <Text style={{ marginBottom: 10, textAlign:'center'}}>
         {favorite[1]} 
        </Text>
        
      </Card>
                )
            })
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderFav()}
            </ScrollView>
        )
    }
}
