export default (store) => (next) => (action) => {
    //code goes here
    // everything stored in state and the redux store, you have access to
    // whatever you return from your action creator is what goes in the 3rd function call

    if (typeof action !== 'function'){
        return next(action);
    }
    // dispatch is a function on the redux store
    return action(store.dispatch);
}