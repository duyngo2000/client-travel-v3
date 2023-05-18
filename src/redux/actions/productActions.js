import { ActionTypes } from "../contants/action-types"

export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const setIdProduct = (id) => {
    return {
        type: ActionTypes.SET_ID_PRODUCT,
        payload: id
    }
}

export const setProductFaverite = (product) => {
    return {
        type: ActionTypes.SET_PRODUCT_FAVERITE,
        payload: product
    }
}
export const setProductCheap = (product) => {
    return {
        type: ActionTypes.SET_PRODUCT_CHEAP,
        payload: product
    }
}

export const setProductExpensive = (product) => {
    return {
        type: ActionTypes.SET_PRODUCT_EXPENSIVE,
        payload: product
    }
}