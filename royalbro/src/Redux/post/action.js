import {STORE_DATA, IS_LOADING, IS_ERROR,ADD_CART} from './actionTypes.js'
// action will always return object
const storeData= (payload)=> ({
    type: STORE_DATA,
    payload: payload
})
const handleLoading= ()=> ({
    type: IS_LOADING
})

const handleError= ()=> ({
    type: IS_ERROR,
})


const addCart = (payload) => ({
    type: ADD_CART,
    payload : payload
})


const getData= () => (dispatch) => {
    dispatch(handleLoading())
        fetch("https://royaldatabase.herokuapp.com/data")
        .then((res)=> res.json())
        // .then((res)=> console.log(res))
        .then((res)=> dispatch(storeData(res)))

        .catch((err)=> dispatch(handleError()));
}
export {storeData, handleError, handleLoading, getData,addCart}
