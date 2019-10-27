import * as types from '../constants/ActionTypes'
var initalState = false;

export var isDisplayForm = (state = initalState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default: return state;
    }
}
