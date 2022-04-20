import React, { useState, useEffect } from "react";
// import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import{storeData} from '../Redux/action'
// import { store } from "../Redux/store";


const Data= ()=>{
 
    const dispatch= useDispatch();
    const [state, newState]= useState();
    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        //.then((res)=> dispatch(storeData(res)))
        .then((res)=> dispatch(storeData(res)))

        .catch((err)=> console.log(err));
    }, [])
    
    const data= useSelector((state)=> state.data );
    console.log(data);

    return <div>
        <h1> details of the data</h1>
    </div>
}

export {Data};