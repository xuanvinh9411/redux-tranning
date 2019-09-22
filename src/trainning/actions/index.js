import  *  as type from './../constants/Actiontypes'
export const status = () =>{
    return {
        type : type.TOGGLE_STATUS
    }
}
export var sort = (sort) =>{
    return {
        type : type.SORT,
        sort : sort  // sort : sort 
    }
}