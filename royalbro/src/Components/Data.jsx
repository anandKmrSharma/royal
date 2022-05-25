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

  const [filt, setFilt]= useState("")
  const lowToHigh= ()=>{
  }

  if (Loading) {
    return <h1>loading...</h1>;
  }
  if (Error) {
    return <h1>something went wrong...</h1>;
  }

  return (
    
    <div>
      
            <h1 style={{marginLeft:"300px", color:"yellowgreen"}}>Filter</h1>
             <Button className="filter">low to high</Button>
             <Button onClick={ lowToHigh} className="filter">high to low</Button>

      {/* <h1 className={styles.head} > Our fleet </h1> */}   
      <div className={styles.container}>
        {data.map((el) => {
          return (
            <>
              <div className={styles.single}>

              <p className={styles.name}>{el.name} </p>
                
                  <img src={el.img} alt="" />
                
                 <p className={styles.contain}> booking Time: {el.booktime}</p>
                <p className={styles.contain}> Kml imit: {el.kmlimit}</p>
                <p className={styles.contain}> km: {el.exkm}</p>
                <p className={styles.contain}>booking price: {el.price}</p>
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


