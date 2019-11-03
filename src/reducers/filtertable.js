import * as types from '../constants/ActionTypes'
var initalState = {
    name: '',
    status: -1
};

export var filtertable = (state = initalState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            state = action.filter 
            return state;
        default: return state;
    }
}
