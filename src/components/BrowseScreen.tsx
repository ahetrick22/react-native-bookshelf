import React, { useState } from 'react';
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
import BookComponent from './BookComponent';

interface Props {
  addBook : (book : Book) => void,
  library : Book[],
  fetchBooks : (query : string) => void,
  currentBooks : Book[]
}

const BrowseScreen = ({ addBook, library, fetchBooks, currentBooks }: Props) : JSX.Element => {

  const [query, onChangeValue] = useState("");

  const fetchBooksToBrowse = (queryStr : string) => {
    onChangeValue(queryStr);
    fetchBooks(queryStr);
  }

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.titleSection}>
        <Text>Browse</Text>
      </View>
      <View style={styles.buttonSection}>
        <TextInput value={query} placeholder="Search here" onChangeText={(text) => fetchBooksToBrowse(text)}></TextInput>
       
          <Text>{currentBooks && currentBooks.length > 0 ? currentBooks.map(book => <View key={book.id}><BookComponent book={book} addBook={addBook}/></View>) : "No books found"}</Text>
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