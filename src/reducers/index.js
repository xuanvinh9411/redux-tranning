import { combineReducers } from 'redux';
import { tasks } from './tasks'
import { isDisplayForm } from './isDisplayForm'
import { itemEditting } from './editItem'

export const myReducer = combineReducers({
    tasks: tasks,
    isDisplayForm,
    itemEditting
});
