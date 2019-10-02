import * as types from '../constants/types';
import { Book, ThunkNoArgs, ThunkWithArgs } from '../constants/interfaces';
import { Dispatch, ActionCreator, Action } from 'redux';
import Config from 'react-native-config';
import { ThunkAction } from 'redux-thunk';


export interface AddBook {
  type: types.ADD_BOOK
  payload: Book
}

export interface RemoveBook {
  type: types.REMOVE_BOOK
  payload: string
}

export interface FetchBooks {
  type: types.SET_BROWSE
  payload: any
}

export type BookAction = AddBook | RemoveBook | FetchBooks;

export const addBook = (book : Book) : AddBook => {
  return {
    type: types.ADD_BOOK,
    payload: book
  }
};

export const removeBook = (id : string) : RemoveBook => {
  return {
    type: types.REMOVE_BOOK,
    payload: id
  }
};

const http = async function<T>(query : string) : Promise<T> {
     let _url: string = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCXCJrPhHxBg1MHqv97TKfs3ZbK6YDV1c0`;
     return new Promise(async (resolve,reject) => {
        const response = await fetch(_url);
        const json = await response.json();
        if (json.items) {
          const filteredResponse = await json.items.map((book : any) => {
            let image : string = '';
            let author : string = '';
            if (book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail) {
              image = book.volumeInfo.imageLinks.smallThumbnail;
            };
            if (book.volumeInfo && book.volumeInfo.authors[0]){
              author = book.volumeInfo.authors[0];
            };
            return {title: book.volumeInfo.title, author, id: book.id, image};
          } )
          resolve(filteredResponse);
        } else {
          reject()
        }
     })
  };

export const fetchBooks : ActionCreator<
ThunkAction<
  Promise<{type: string, payload: any}>,  // The type of the last action to be dispatched - will always be promise<T> for async actions
  Book[],                  // The type for the data within the last action
  string,                       // The type of the parameter for the nested function 
  FetchBooks            // The type of the last action to be dispatched
>
> = (query : string) => async (dispatch : Dispatch) => {
    const res : any = await http(query);
      return dispatch({
        type: types.SET_BROWSE,
        payload: res
      });
}