import { combineReducers } from 'redux';
import { tasks } from './tasks'
import { isDisplayForm } from './isDisplayForm'
import { itemEditing } from './itemEditing'

export const myReducer = combineReducers({
    tasks: tasks,
    isDisplayForm,
    itemEditing
});
