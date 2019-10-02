import BrowseScreen from '../components/BrowseScreen';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Book, State } from '../constants/interfaces';

export const mapStateToProps : any = ({ library, currentBooks }: State) => {
  return {
    library: library,
    currentBooks: currentBooks
  }
}

export const mapDispatchToProps : any = (dispatch: any) => {
  return {
    addBook: (book : Book) => dispatch(actions.addBook(book)),
    fetchBooks: (query : string) => dispatch(actions.fetchBooks(query)),
    removeBook: (id : string) => dispatch(actions.removeBook(id))
  }
}

export default connect<any>(mapStateToProps, mapDispatchToProps)(BrowseScreen);