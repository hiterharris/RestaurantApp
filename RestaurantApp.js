import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Card from './card';
import profiles from './data/profiles.json';

export default class RestaurantApp extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('/Users/HiterHarrisIV/Desktop/Projects/RestaurantApp/assets/images/Logo.png')}
          />
        </View>
        <View style={{flex:1}}>
          {profiles.reverse().map((profile, i) => {
            return (
              <Card
              key={i}
              profile={profile}
            />
            )
          })}  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#BD1802',
    flex: 1,
    top: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
})

