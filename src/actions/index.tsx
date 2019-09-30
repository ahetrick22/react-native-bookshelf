import * as types from '../constants/types';
import { Book } from '../constants/interfaces';
import { identifier } from '@babel/types';

export interface AddBook {
  type: types.ADD_BOOK
  payload: Book
}

export interface RemoveBook {
  type: types.REMOVE_BOOK
  payload: Book
}

export type BookAction = AddBook | RemoveBook;

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
  type: types.REMOVE_BOOK
  payload: Book[]
}

export type FetchAction = FetchBooks;

export const fetchBooks = async (query : string) : FetchBooks => {
  const currentSearch : Response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCXCJrPhHxBg1MHqv97TKfs3ZbK6YDV1c0`)
  const currentSearchParsed = await currentSearch.json();
  const filteredSearch : Book[] = currentSearchParsed.items.map((book : any) => {
    return {title: book.volumeInfo.title, author: book.volumeInfo.authors[0], id: book.id, image: book.imageLinks.smallThumbnail};
  });
  return {
    type: types.REMOVE_BOOK,
    payload: filteredSearch
  }
};