import { combineReducers } from 'redux';
import { tasks } from './tasks'
import { isDisplayForm } from './isDisplayForm'
import { itemEditing } from './itemEditing'
import { filtertable } from './filtertable'
import { searchTask } from './search'
import { sorttask } from './sort'

export const myReducer = combineReducers({
    tasks: tasks,
    isDisplayForm,
    itemEditing,
    filtertable,
    searchTask,
    sorttask
});
