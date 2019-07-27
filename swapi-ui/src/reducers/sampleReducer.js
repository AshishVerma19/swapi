const initialState = {name: "Ashish"};

export default (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'CHANGE_NAME':
         return {
            ...newState,
            name:action.payload
         }
        default:
         return state
    }
}