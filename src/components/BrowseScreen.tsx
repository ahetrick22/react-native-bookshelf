import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';
import { Book } from '../constants/interfaces';
import BookComponent from './BookComponent';
import {Icon} from 'react-native-elements';

interface Props {
  addBook : (book : Book) => void,
  library : Book[],
  fetchBooks : (query : string) => void,
  currentBooks : Book[],
  removeBook : (id : string) => void
}

const BrowseScreen = ({ addBook, library, fetchBooks, currentBooks, removeBook }: Props) : JSX.Element => {

  const [query, onChangeValue] = useState("");

  const fetchBooksToBrowse = (queryStr : string) => {
    onChangeValue(queryStr);
    fetchBooks(queryStr);
  }

  return (
    <SafeAreaView style={styles.homeScreen}>
      <ScrollView>
      <View style={styles.titleSection}>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.searchBar}>
        <Icon name="search" />
        <TextInput style={styles.searchInput} value={query} placeholder="Search here" onChangeText={(text) => fetchBooksToBrowse(text)}></TextInput>
        </View>
          {currentBooks && currentBooks.length > 0 ? currentBooks.map(book => <View style={styles.bookComponentView} key={book.id}><BookComponent book={book} addBook={addBook} removeBook={removeBook}/></View>) : <Text>No books found</Text>}
      </View>
      </ScrollView>
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
  },
  bookComponentView: {
    height: 250,
    width: Dimensions.get('screen').width*0.9,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: Dimensions.get('screen').width*0.9,
    justifyContent: 'space-between'
  },
  searchInput: {
    width: Dimensions.get('screen').width*0.8
  }
});

export default BrowseScreen;