import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { HIT_SLOP } from '../constants/hitSlop';
 
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const HomeScreen = ({ navigation } : Props) => {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.titleSection}>
      <Text>Bookshelf</Text>
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
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flexDirection: 'column',
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    justifyContent: 'space-evenly'
  },
  titleSection: {
    alignItems: 'center'
   },
  buttonSection: {
    alignItems: 'center'
  },
  homeButton: {
    backgroundColor: 'green',
    width: Dimensions.get('screen').width*0.5,
    borderRadius: 25,
    padding: 15,
    margin: 15
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default HomeScreen;
