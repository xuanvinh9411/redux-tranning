var initialState = {
    sort: {
        by: 'name',
        value: 1
    }
}
export var sort = (state = initialState.sort, action) => {
    if (action.type === 'SORT') {
        var { by, value } = action.sort;
        return {
                by: by,
                value: value
        }

    }
    return state
}   

export default sort;