import { ActionTypes } from "../contants/action-types";

const initialState = {
    news: []
}
const initialStateTips = {
    news: []
}
const initialStateExperience = {
    news: []
}
const initialStateNewsMany = {
    news: []
}

export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NEWS:
            return { ...state, news: payload }
        default:
            return state
    }
}

export const newsTipsReducer = (state = initialStateTips, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NEWS_TIPS:
            return { ...state, news: payload }
        default:
            return state
    }
}


export const newsExperienceReducer = (state = initialStateExperience, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NEWS_EXPERIENCE:
            return { ...state, news: payload }
        default:
            return state
    }
}


export const selectedNewsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_NEWS:
            return { ...state, news: payload }
        default:
            return state
    }
}

export const setNewsManyReducer = (state = initialStateNewsMany, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NEWS_MANY:
            return { ...state, news: payload }
        default:
            return state
    }
}