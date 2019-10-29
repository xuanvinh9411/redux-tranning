import * as types from '../constants/ActionTypes'
var initalState = {};

export var itemEditing = (state = initalState, action) => {
    switch (action.type) {
        case types.EDIT_ITEM:
            state = action.task;
            return state;
        default: return state;
    }
}
