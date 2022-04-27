import React, { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

const Products= ()=>{
const arr=[
    {
        "name" : "masai",
        "category": "tech"
    },
    {
        "name" : "kolkata",
        "category": "tech"
    },
    {
        "name" : "amazon",
        "category": "intech"
    }
]
const params= useParams();
// console.log("params",params);
const navigate= useNavigate();
const[category,setCategory]= useState("");
    return(
        <>
      <h1>products page</h1>
 <p>products is : {params.id}</p>

     
     
 
 <button onClick={ ()=>
     navigate("/data")
  }>data page</button>
</>
    )
}

export {Products};