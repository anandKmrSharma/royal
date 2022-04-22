import {STORE_DATA, IS_LOADING, IS_ERROR} from './actionTypes.js'
// action will always return object
const storeData= (payload)=> ({
    type: STORE_DATA,
    payLoad: payload
})
const handleLoading= ()=> ({
    type: IS_LOADING
})

const handleError= ()=> ({
    type: IS_ERROR,
})

const getData= () => (dispatch) => {
    dispatch(handleLoading())
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then((res)=> dispatch(storeData(res)))
        .catch((err)=> dispatch(handleError()));
}
export {storeData, handleError, handleLoading, getData}
