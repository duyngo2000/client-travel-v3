import { ActionTypes } from "../contants/action-types"

export const setNews = (news) => {
    return {
        type: ActionTypes.SET_NEWS,
        payload: news
    }
}
export const selectedNews = (news) => {
    return {
        type: ActionTypes.SELECTED_NEWS,
        payload: news
    }
}
export const setNewsTips = (news) => {
    return {
        type: ActionTypes.SET_NEWS_TIPS,
        payload: news
    }
}
export const setNewsExperience = (news) => {
    return {
        type: ActionTypes.SET_NEWS_EXPERIENCE,
        payload: news
    }
}

export const setNewsMany = (news) => {
    return {
        type: ActionTypes.SET_NEWS_MANY,
        payload: news
    }
}