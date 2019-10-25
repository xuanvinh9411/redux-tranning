import * as types from './../constants/ActionTypes'

// var initalState = [{
//     id: 1,
//     name: 'Học lạp trình1',
//     status: true
// },

// {
//     id: 2,
//     name: 'Học lạp trình2',
//     status: false
// },]
//     ;
var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var randomID = () => {
    return s4() + s4() + '_' + s4() + '_';
}

var Data = JSON.parse(localStorage.getItem('task'));
var initalState = Data ? Data : [];

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
        default: return state;
    }
}
