import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {HIT_SLOP} from '../constants/hitSlop';
import { Book } from '../constants/interfaces';
import { BookAction } from '../actions';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
  library : Book[],
  removeBook : BookAction
}

const LibraryScreen = ({navigation, library, removeBook}: Props) => {

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.titleSection}>
        <Text>Library</Text>
      </View>
      <View style={styles.buttonSection}>
        <Text>Your Library</Text>
        {library ?
          library.map(book => <Text key={book.id}>{book.title} by {book.author}</Text>) :
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
});

export default LibraryScreen;