import React from 'react';
import {Book} from '../constants/interfaces';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {HIT_SLOP} from '../constants/hitSlop';
import { Icon } from 'react-native-elements';

interface Props {
  book: Book;
  addBook: (book: Book) => void;
  removeBook: (id : string) => void;
}

const BookComponent = ({ book, addBook, removeBook }: Props): JSX.Element => {
  return (
    <>
      {book.image ? <Image style={styles.thumbnailStyle} source={{uri: book.image}} /> : <></>}
      <Text style={styles.titleText}>{book.title}</Text>
      <Text style={styles.authorText}>by {book.author}</Text>
      { book.inLibrary ?
      <TouchableOpacity
      style={{...styles.buttonBase, ...styles.removeButton}}
      hitSlop={HIT_SLOP}
      onPress={() => removeBook(book.id)}>
      <Icon color='white' name="bookmark" />
      <Text style={styles.buttonText}>Remove from Library</Text>
    </TouchableOpacity>
      :
      <TouchableOpacity
        style={{...styles.buttonBase, ...styles.addButton}}
        hitSlop={HIT_SLOP}
        onPress={() => addBook(book)}>
        <Icon color='white' name="add" />
        <Text style={styles.buttonText}>Add to Library</Text>
      </TouchableOpacity>}
    </>
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
  titleText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    marginBottom: 2,
  },
  authorText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
  },
  buttonSection: {
    alignItems: 'center',
  },
  buttonBase: {
    width: Dimensions.get('screen').width * 0.5,
    borderRadius: 25,
    padding: 4,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    backgroundColor: 'blue',
  },
  removeButton: {
    backgroundColor: 'red'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  thumbnailStyle: {width: 100, height: 150}
});

export default BookComponent;
