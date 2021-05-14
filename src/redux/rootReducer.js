import {initialState} from './initialState';

import userPageReducer from "./reducers/bidPageReducer";
import {combineReducers} from "redux";
import originalPageReducer from "./reducers/originalPageReducer";

export const rootReducer = combineReducers(
    {
        userPage: userPageReducer,
        originalPageUser: originalPageReducer
    }
)

