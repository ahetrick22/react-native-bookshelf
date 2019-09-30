import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {HIT_SLOP} from '../constants/hitSlop';
import { Book } from '../constants/interfaces';

interface Props {
  addBook : (book : Book) => void,
  library : Book[]
}

const BrowseScreen = ({ addBook, library }: Props) : JSX.Element => {

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.titleSection}>
        <Text>Browse</Text>
      </View>
      <View style={styles.buttonSection}>
        <TextInput onChangeText={}></TextInput>
        <TouchableOpacity style={styles.homeButton} hitSlop={HIT_SLOP} onPress={() => addBook({title: 'Test title', author: 'test author', id: 'abc'})}>
          <Text style={styles.buttonText}>Add a new book</Text>
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
    justifyContent: 'space-evenly',
  },
  titleSection: {
    alignItems: 'center',
  },
  buttonSection: {
    alignItems: 'center',
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

export default BrowseScreen;