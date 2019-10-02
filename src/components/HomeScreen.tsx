import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { HIT_SLOP } from '../constants/hitSlop';
const backgroundImage = require('../images/bookshelf_background.jpg');
 
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const HomeScreen = ({ navigation } : Props) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.titleSection}>
      <Text style={styles.titleText}>Bookshelf</Text>
      </View>
      <View style={styles.buttonSection}>
      <TouchableOpacity style={styles.homeButton} hitSlop={HIT_SLOP} onPress={() => navigation.navigate('Library')}>
        <Text style={styles.buttonText}>View Your Books</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeButton} hitSlop={HIT_SLOP} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Add More Books</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%', 
    height: '100%', 
    opacity: 0.7
  },
  homeScreen: {
    flexDirection: 'column',
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    justifyContent: 'space-evenly',
   
  },
  titleSection: {
    alignItems: 'center'
   },
  titleText: { 
    fontSize: 60,
    color: 'green',
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowRadius: 10
   },
  buttonSection: {
    alignItems: 'center'
  },
  homeButton: {
    backgroundColor: 'green',
    width: Dimensions.get('screen').width*0.5,
    borderRadius: 25,
    padding: 15,
    margin: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default HomeScreen;
