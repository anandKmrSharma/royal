
import {STORE_DATA, IS_ERROR, IS_LOADING} from './actionTypes.js'

// initial state

const initState= {
     isLoading: false,
     isError: false, 
     data: []
}

// reducer read the action and according to that will update the state;

const postReducer= (state=initState, action)=> {
   switch(action.type){
     case IS_LOADING:
         return{...state, isLoading: true}

         case IS_ERROR:
            return{...state, isLoading:false, isError: true}


       case STORE_DATA:

       return {...state, isLoading:false, data: action.payload}
       default: 
       return state;

   }
}

export {postReducer};