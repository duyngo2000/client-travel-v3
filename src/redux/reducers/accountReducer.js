import { ActionTypes } from "../contants/action-types";

const initialState = {
    account: []
}

export const setAccount = (state = initialState, action)=>{
    switch (action.type) {
        case ActionTypes.SET_ACCOUNT:
            return {...state, account: action.payload}
    
        default:
            return state
    }
}   