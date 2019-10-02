import { State, Book } from '../constants/interfaces';
import * as types from '../constants/types';

const initialAppState: State = {
  library: [],
  currentBooks: []
};

export const rootReducer = (state: State = initialAppState, { type, payload } : { type: string; payload: any }): State => {
   switch (type) {
      case types.ADD_BOOK:
          payload.inLibrary = true;
         return {...state, library: [...state.library, payload]};
      case types.REMOVE_BOOK:
        const bookToRemove : Book | undefined = state.library.find(book => book.id === payload);
        const indexToRemove : number = state.library.findIndex(book => book === bookToRemove);
        const updatedLibrary : Book[] = [...state.library];
        if (bookToRemove && indexToRemove > -1) {
          updatedLibrary.splice(indexToRemove, 1);
          const bookInSearch = state.currentBooks.find(book => book.id === payload);
          if (bookInSearch) {
            bookInSearch.inLibrary = false;
          }
          return {...state, library: [...updatedLibrary]};
        }
        return {...state, library: [...state.library, payload]};
      case types.SET_BROWSE: 
      if (payload) {
        const updatedBooks = payload.map((book : any) => {
          if (state.library.find(bookInLibrary => book.id === bookInLibrary.id)) {
            book.inLibrary = true;
          } else {
            book.inLibrary = false;
          }
          return book;
        });
        return {...state, currentBooks: [...updatedBooks]}
      } else {
        return {...state};
      }
      default:
         return state;
   };
};

