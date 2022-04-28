import React, { useState, useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import {useParams, useNavigate} from "react-router-dom"
import './Data.css';
import Button from '@material-ui/core/Button';

import{ storeData, handleError, handleLoading, getData } from '../Redux/post/action';
const Data= ()=>{
const navigate= useNavigate();
 
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
        <h1> details of the data </h1>

        <div className="container">

        {
      data.map((el)=>{
        return(
            <>
            <div className='single'>
                <p>image <img src={el.img} alt="" /></p>
            {/* <img src={el.img} alt="" /> */}
            <h1>name: {el.name} </h1>
            {/* <h1 style={{color:'green', borderRadius:'2px'}}  > {el.rating} </h1>
            <h1> {el.category} </h1> */}
            </div>
            
            </>
        )
      })

    }

        </div>
        
    
        <button onClick={ ()=>
     navigate("/products/:id")
  }   >products  page</button>

  <Button>button </Button>
    </div>
}
export {Data};