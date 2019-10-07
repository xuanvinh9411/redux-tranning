import * as types from './../constants/ActionTypes'

var initalState = [{
    id: 1,
    name: 'Học lạp trình1',
    status: true
},

{
    id: 2,
    name: 'Học lạp trình2',
    status: false
},]
    ;

export var tasks = (state = initalState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            console.log(action);
            return state;
        default: return state;
    }
}
