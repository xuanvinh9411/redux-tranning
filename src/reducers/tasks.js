import * as types from './../constants/ActionTypes'

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var randomID = () => {
    return s4() + s4() + '_' + s4() + '_';
}

var findIndex = (tasks,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
};

var Data = JSON.parse(localStorage.getItem('task'));
var initalState = Data ? Data : [];
var id = '';
var index = '';

export var tasks = (state = initalState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id : randomID(),
                name : action.task.name,
                status : action.task.status === 'true' ? true : false
            } 
            state.push(newTask);
            localStorage.setItem('task',JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
             id = action.id
             index = findIndex(state,id)
            state[index].status = !state[index].status
            localStorage.setItem('task', JSON.stringify(state));
            return [...state]
        case types.DELETE_TASK:
             id = action.id
             index = findIndex(state,id)
            state.splice([index],1)
            localStorage.setItem('task', JSON.stringify(state));
            return [...state]
        default: return state;
    }
}
