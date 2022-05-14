import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Data.module.css";

import Button from "@material-ui/core/Button";
// import { useNavigate } from "react-router";
import {
  storeData,
  handleError,
  handleLoading,
  getData,
} from "../Redux/post/action";
const Data = () => {
  const navigate = useNavigate();
  const params= useParams();
  // console.log("params", params);
  const[category,setCategory]= useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  
  const data = useSelector((state) => state.post.data);
  const Loading = useSelector((state) => state.post.isLoading);
  const Error = useSelector((state) => state.post.isError);

  // const dataHandling= ()=>{
  //   console.log("annad", params);
  //   navigate("/product")
  // }

  if (Loading) {
    return <h1>loading...</h1>;
  }
  if (Error) {
    return <h1>something went wrong...</h1>;
  }
  return (
    <div  >

    <h1>Params id is : {params.id}</h1>

      <h1 className={styles.head} > Book your ride </h1>

      <div className={styles.container}>
        {data.map((el) => {
          return (
            <>
              <div className={styles.single}>
                <p>
                  <img src={el.img} alt="" />
                </p>
                <h1>{el.name} </h1> 
                <Button onClick={ ()=>{navigate(`/product/${el.id}`)}  } className={styles.book}>Book</Button>  
                {/* <button cname="boo">Book</button>   */}  
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export { Data };





//navigation part
  // const handleNavigate= (proId)=>{
  //          navigate(`product/${proId}`)
  // }
{/* <h1 onClick={handleNavigate(1)}>product 1</h1> */}
      {/* <h1 onClick={handleNavigate(2)}>product 2</h1> */}
