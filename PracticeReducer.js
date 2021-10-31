import { DECREMENT, FETCH_USER_SUCCESS, INCREMENT,RESET } from "./PracticeType";

const initialState={
    count:0,
    user:undefined
}

export const PracticeReducer=(state=initialState,action)=>{
    console.log("state",state)
    switch(action.type){
        case INCREMENT:
        return{
count:state.count+1
        }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
            case RESET:
                return{
                    count:0
                }
                case FETCH_USER_SUCCESS : 
        return{
            ...state, 
            data:action.payload,
        };
    }
    
   return state;
}