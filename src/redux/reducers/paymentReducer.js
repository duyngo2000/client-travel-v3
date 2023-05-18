import { ActionTypes } from "../contants/action-types";

const initialState = {
    payment:{
        info: {
            name: "",
            yearOfBirth: "",
            email: "",
            numberPhone: "",
            address: "",
        },
        method: {
            id: "",
            name: ""
        },
        tour: {
            id: "",
            name:""
        }
    }
}

export const setPayment = (state = initialState, action)=>{
    switch (action.type) {
        case ActionTypes.SET_PAYMENT:
            return {...state, payment: action.payload}
    
        default:
            return state
    }
}   