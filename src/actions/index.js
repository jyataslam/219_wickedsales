import types from './types';

export function signIn(user){
    console.log('Sign in action creator user info: ', user);
    return {
        type: types.SIGN_IN,
        email: user.email
    }
}

// every action function has only ONE TYPE
export function signOut(){

    return {
        type: types.SIGN_OUT
    }
}
