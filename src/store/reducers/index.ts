import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {operationReducer} from "./operationReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  operation: operationReducer,
})

export type RootState = ReturnType<typeof rootReducer>