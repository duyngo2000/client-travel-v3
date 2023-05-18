import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: []
}
const initialState2 = {
    faveriteProducts: []
}
const initialStateCheapProducts = {
    cheapProducts: []
}
const initialStateExpensiveProducts = {
    expensiveProducts: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, products: payload }
        default:
            return state
    }
}

export const selectedProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, products: payload }
        default:
            return state
    }
}

export const setIdProductReducer = (state = "", { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ID_PRODUCT:
            return { ...state, products: payload }
        default:
            return state
    }
}

export const setProductFaveriteReducer = (state = initialState2, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT_FAVERITE:
            return { ...state, faveriteProducts: payload }
        default:
            return state
    }
}
export const setProductCheapReducer = (state = initialStateCheapProducts, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT_CHEAP:
            return { ...state, cheapProducts: payload }
        default:
            return state
    }
}

export const setProductExpensiveReducer = (state = initialStateExpensiveProducts, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT_EXPENSIVE:
            return { ...state, expensiveProducts: payload }
        default:
            return state
    }
}