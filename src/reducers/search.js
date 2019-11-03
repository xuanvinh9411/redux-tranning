import * as types from '../constants/ActionTypes'
var initalState = '';

export var searchTask = (state = initalState, action) => {
    switch (action.type) {
        case types.SEARCH:
            state = action.keyword
            return state;
        default: return state;
    }
}
