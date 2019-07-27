
export const simpleAction = (name) => dispatch => {
    dispatch({
     type: 'CHANGE_NAME',
     payload: name
    })
   }