import { State, Book } from '../constants/interfaces';
import * as types from '../constants/types';
import { ActionSheetIOS } from 'react-native';

const initialAppState: State = {
  library: [{title: 'I am a book', author: 'I am an author', id: 'def'}],
  currentBooks: []
};

export const rootReducer = (state: State = initialAppState, { type, payload } : { type: string; payload: any }): State => {
   switch (type) {
      case types.ADD_BOOK:
         return {...state, library: [...state.library, payload]};
      case types.REMOVE_BOOK:
        const bookToRemove : Book | undefined = state.library.find(book => book.id === payload);
        const indexToRemove : number = state.library.findIndex(book => book === bookToRemove);
        const updatedLibrary : Book[] = [...state.library];
        if (bookToRemove && indexToRemove > -1) {
          updatedLibrary.splice(indexToRemove, 1);
          return {...state, library: [...updatedLibrary]};
        }
        return {...state, library: [...state.library, payload]};
      case types.SET_BROWSE: 
        return {...state, currentBooks: [...payload]}
      default:
         return state;
   };
};