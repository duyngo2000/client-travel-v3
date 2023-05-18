import { ActionTypes } from "../contants/action-types";

const initialState = {
    language: 'VN'
}

export const setLanguage = (state = initialState, action)=>{
    switch (action.type) {
        case ActionTypes.SET_LANGUAGE:
            return {...state, language: action.payload}
    
        default:
            return state
    }
}