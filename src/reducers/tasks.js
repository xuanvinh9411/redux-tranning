import * as types from './../constants/ActionTypes'

var initalState = [{
        test : 'asv'
    }]
;

export var tasks = ( state = initalState, action) =>{
    switch(action.type){
        case types.LIST_ALL:
            return state;
            default : return state;
    }
}
