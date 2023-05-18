import { ActionTypes } from "../contants/action-types";

export const setPayment = (value)=>{
    return {
        type: ActionTypes.SET_PAYMENT,
        payload: value
    }
}