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
            var id = action.id
            var index = findIndex(state,id)
            state[index].status = !state[index].status
            localStorage.setItem('task', JSON.stringify(state));
            return [...state]
        case types.DELETE_TASK:
            var id = action.id
            var index = findIndex(state,id)
            state.splice([index],1)
            localStorage.setItem('task', JSON.stringify(state));
            return [...state]
        default: return state;
    }
}
