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

  const dataHandling= ()=>{
    console.log("annad", params);
    navigate(`/product/${data.el.id}`)
  }

  if (Loading) {
    return <h1>loading...</h1>;
  }
  if (Error) {
    return <h1>something went wrong...</h1>;
  }
  return (
    <div  >

      {/* <h1 className={styles.head} > Our fleet </h1> */}

      <div className={styles.container}>
        {data.map((el) => {
          return (
            <>
              <div className={styles.single}>

              <p className={styles.name}>{el.name} </p>
                
                  <img src={el.img} alt="" />
                
                 <p className={styles.contain}> bookTime: {el.booktime}</p>
                <p className={styles.contain}> Kmlimit: {el.kmlimit}</p>
                <p className={styles.contain}> km: {el.exkm}</p>
                <p className={styles.contain}>price: {el.price}</p>
                <p className={styles.button}>
                <Button  onClick={ ()=>{navigate(`/product/${el.id}`)}  } className={styles.book}>Book</Button>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export { Data };


// "id": 2,
// 		"name": "Honda Dio",
// 		"img": "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/Dio-min_2.png?1519738819",
// 		"booktime": "19",
// 		"kmlimit": "5",
// 		"exkm": "4",
// 		"price": "9000"


//navigation part
  // const handleNavigate= (proId)=>{
  //          navigate(`product/${proId}`)
  // }
{/* <h1 onClick={handleNavigate(1)}>product 1</h1> */}
      {/* <h1 onClick={handleNavigate(2)}>product 2</h1> */}
