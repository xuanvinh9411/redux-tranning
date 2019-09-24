import  { combineReducers }  from 'redux';
import {tasks}  from './tasks'

export const myReducer =  combineReducers({
       tasks : tasks
});
