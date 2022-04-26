import React from "react";
import {useParams} from "react-router-dom"

const Products= ()=>{
const params= useParams();
console.log("params",params);
    return(
        <>
      <h1>products page</h1>
 <p>products is : {params.id}</p>
        </>
    )
}

export {Products};