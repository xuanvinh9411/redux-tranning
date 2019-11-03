import * as types from '../constants/ActionTypes'
var initalState = {
    by: '',
    value: 1
};

export var sorttask = (state = initalState, action) => {
    switch (action.type) {
        case types.SORT:
            state = action.sort
            return state;
        default: return state;
    }
}
