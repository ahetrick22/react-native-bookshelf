import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export interface Book {
  title : string
  author : string,
  id : string,
  image: string,
  inLibrary: boolean
}

export interface State {
  library : Book[],
  currentBooks : Book[]
}

export type ThunkWithArgs<A, P> = (args: A) => ThunkAction<Promise<{ type: string; payload: P }>, State, void, AnyAction>;

export type ThunkNoArgs<P> = () => ThunkAction<Promise<{ type: string; payload: P }>, State, void, AnyAction>;