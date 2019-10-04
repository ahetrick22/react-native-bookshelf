import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { Book } from '../constants/interfaces';
import BookComponent from './BookComponent';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
  library : Book[]
  removeBook : (id : string) => void
  addBook : (book : Book) => void
}

const LibraryScreen = ({navigation, library, removeBook, addBook}: Props) => {

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.titleSection}>
        <Text>Library</Text>
      </View>
      <View style={styles.buttonSection}>
        <Text>Your Library</Text>
        {library && library.length > 0 ?
          library.map(book => <View style={styles.bookComponentView} key={book.id}><BookComponent key={book.id} book={book} addBook={addBook} removeBook={removeBook}/></View>) :
          <Text>You have no books yet</Text>}
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
  bookComponentView: {
    height: 250,
    width: Dimensions.get('screen').width*0.9,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default LibraryScreen;