import { createStore } from 'redux';
import {status , sort } from './actions/index'
import  { myReducer } from './Reducers/index'

const store = createStore(myReducer);

console.log("star ", store.getState())

store.dispatch(status())
console.log("Default ", store.getState())

store.dispatch(status())

store.dispatch(sort({
    by : 'name',
    value : -1
}));

console.log("sort :", store.getState())