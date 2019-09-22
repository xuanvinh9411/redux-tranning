import {status} from "./status";
import {sort} from "./sort";
import { combineReducers } from 'redux'

export const myReducer = combineReducers({
    status ,
    sort 
});