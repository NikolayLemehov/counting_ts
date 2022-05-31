import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {operationReducer} from "./operationReducer";
import {ratingReducer} from "./ratingReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  operation: operationReducer,
  rating: ratingReducer,
})

export type RootState = ReturnType<typeof rootReducer>