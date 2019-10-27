import * as types from '../constants/ActionTypes'
var initalState = {};

export var itemEditting = (state = initalState, action) => {
    switch (action.type) {
        case types.EDIT_ITEM:
            console.log(action.task)
            return action;
        default: return state;
    }
}
