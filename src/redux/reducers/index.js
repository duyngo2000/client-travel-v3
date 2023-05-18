import { combineReducers } from 'redux'
import { setAccount } from './accountReducer'
import { setLanguage } from './languageReducer'
import { newsExperienceReducer, newsReducer, newsTipsReducer, selectedNewsReducer, setNewsManyReducer } from './newsReducer'
import { setPayment } from './paymentReducer'
import { productReducer, selectedProductReducer, setProductCheapReducer, setProductExpensiveReducer, setProductFaveriteReducer } from './productReducer'
import { setIdProductReducer } from './productReducer'

const reducer = combineReducers({
    //language
    setLanguage: setLanguage,

    //product
    allProducts: productReducer,
    product: selectedProductReducer,
    idProduct: setIdProductReducer,
    faveriteProduct: setProductFaveriteReducer,
    cheapProduct: setProductCheapReducer,
    expensiveProduct: setProductExpensiveReducer,

    //news
    allNews: newsReducer,
    newsTips: newsTipsReducer,
    newsExperience: newsExperienceReducer,
    news: selectedNewsReducer,
    newsMany: setNewsManyReducer,

    //payment
    payment: setPayment,

    //account
    account: setAccount
})

export default reducer