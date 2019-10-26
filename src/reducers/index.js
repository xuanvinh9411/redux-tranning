import  { combineReducers }  from 'redux';
import {tasks}  from './tasks'
import {isDisplayForm}  from './isDisplayForm'

export const myReducer =  combineReducers({
       tasks : tasks ,
       isDisplayForm
});
