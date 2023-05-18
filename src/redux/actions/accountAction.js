import { ActionTypes } from "../contants/action-types";

export const setAccount = (value)=>{
    return {
        type: ActionTypes.SET_ACCOUNT,
        payload: value
    }
}