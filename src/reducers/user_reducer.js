
const DEFAULT_STATE = {
    auth: false,
    username: ''
};

// action type example. type is always a string
// const actionExample = {
//     type: 'LOG_USER_IN',
//     username: 'Jimbob'
// }

// will be called by Redux when we are updating state
// first param is the piece of state you want to update. If state is not given to us, set state = default_state
// second param is an action. it MUST have a type property
function userReducer(state = DEFAULT_STATE, action){
    switch(action.type){
        // case 'LOG_USER_IN':
        //     return {...state, auth: true, username: action.username };
        default: 
            return state;
    }
}

export default userReducer;
