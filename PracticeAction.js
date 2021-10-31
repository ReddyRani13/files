import { DECREMENT, FETCH_USER_SUCCESS, INCREMENT ,RESET, FETCH_USER,FETCH_USER_ERROR,INSERT_ASYS} from "./PracticeType";

 export function increment(count){
    return{
        type:INCREMENT,
         payload:count
    }
}
export function decrement(count){
    return{
        type:DECREMENT,
         payload:count
    }
}
export function Reset(count){
    return{
        type:RESET,
         payload:count
    }
}

export function asysinc() {
    return {
        type: INSERT_ASYS
    }

};
export function fetchUser() {
    return {
        type: FETCH_USER
    }

};
export function fetchSuccess(data) {
    console.log('fetchUser==', data)
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
};
export function fetchError(error) {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}
