import LibraryScreen from '../components/LibraryScreen';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Book, State } from '../constants/interfaces';

export const mapStateToProps : any = ({ library }: State) => {
  return {
    library: library
  }
}

export const mapDispatchToProps : any = (dispatch: Dispatch<actions.BookAction>) => {
  return {
    removeBook: (id : string) => dispatch(actions.removeBook(id)),
    addBook: (book : Book) => dispatch(actions.addBook(book))
  }
}

export default connect<any>(mapStateToProps, mapDispatchToProps)(LibraryScreen);