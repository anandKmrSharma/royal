import React, { useState, useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import{ storeData, handleError, handleLoading, getData } from '../Redux/post/action';
const Data= ()=>{
 
    const dispatch= useDispatch();
    useEffect( ()=>{
        dispatch(getData());
    }, [])

    const data= useSelector((state)=> state.post.data )
    const Loading= useSelector((state)=> state.post.isLoading )
    const Error= useSelector((state)=> state.post.isError )

    console.log("data",data);

    if(Loading){
        return <h1>loading...</h1>
    }
    if(Error){
        return <h1>something went wrong...</h1>
    }

    return <div>
        <h1> details of the data</h1>
    </div>
}
export {Data};