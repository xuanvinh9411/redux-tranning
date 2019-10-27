import * as types from './../constants/ActionTypes'

export const list_all = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}

export const toggleform =() =>{
    return {
        type : types.TOGGLE_FORM
    }
}

export const openform =() =>{
    return {
        type : types.OPEN_FORM
    }
}

export const closeform =() =>{
    return {
        type : types.CLOSE_FORM
    }
}

export const updatestatus =(id) =>{
    return {
        type : types.UPDATE_STATUS,
        id 
    }
}

export const deletetask =(id) =>{
    return{
        type : types.DELETE_TASK,
        id
    }
}
export const edititem =(task) =>{
    return {
        type : types.EDIT_ITEM,
        task
    }
}