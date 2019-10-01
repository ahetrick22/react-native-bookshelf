import * as types from '../constants/types';
import { Book, ThunkNoArgs, ThunkWithArgs } from '../constants/interfaces';
import { Dispatch } from 'redux';

export interface AddBook {
  type: types.ADD_BOOK
  payload: Book
}

export interface RemoveBook {
  type: types.REMOVE_BOOK
  payload: Book
}

export type BookAction = AddBook | RemoveBook | FetchBooks;

export const addBook = (book : Book) : AddBook => {
  return {
    type: types.ADD_BOOK,
    payload: book
  }
};

export const removeBook = (book : Book) : RemoveBook => {
  return {
    type: types.REMOVE_BOOK,
    payload: book
  }
};

export interface FetchBooks {
  type: types.SET_BROWSE
  payload: Book[]
}

const http = async function<T>(query : string) : Promise<T> {
     let _url: string = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCXCJrPhHxBg1MHqv97TKfs3ZbK6YDV1c0`;
     return new Promise(async resolve => {
        const response = await fetch(_url)
        const json = await response.json();
        const filteredResponse = await json.items.map((book : any) => {
          let image : string = '';
          let author : string = '';
          if (book.imageLinks) {
            image = book.imageLinks.smallThumbnail;
          };
          if (book.volumeInfo.authors[0]) {
            author = book.volumeInfo.authors[0];
          }
          return {title: book.volumeInfo.title, author, id: book.id, image};
        } )
        resolve(filteredResponse);
     })
  };

export const fetchBooks : any = (query : string) => async (dispatch : Dispatch) => {
    const res = await http(query);
    return dispatch({
      type: types.SET_BROWSE,
      payload: res
    })
}