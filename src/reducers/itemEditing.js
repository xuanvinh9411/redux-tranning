import * as types from '../constants/ActionTypes'
var initalState = {
    id: '',
    name: '',
    status: true
};

export var itemEditing = (state = initalState, action) => {
    switch (action.type) {
        case types.EDIT_ITEM:
            state = action.task;
            return state;
        case types.CLEAR_ITEM:
            return state;
        default: return state;
    }
}
