import BrowseScreen from '../components/BrowseScreen';
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
    addBook: (book : Book) => dispatch(actions.addBook(book))
  }
}

export default connect<any>(mapStateToProps, mapDispatchToProps)(BrowseScreen);