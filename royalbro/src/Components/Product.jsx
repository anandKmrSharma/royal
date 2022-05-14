import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import { getData } from "../Redux/post/action";
import styles from "./Data.module.css";

const Products = () => {
  const {id} = useParams();
//   console.log("params product", params);
  const navigate = useNavigate();
  const data = useSelector((state) => state.post.data);
  const add_cart = useSelector((state) => state.post.cart);
  //   console.log("data",data);
  //   console.log("addcart",data);

  const paymentData = () => {
    navigate("/paymentpage");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const [prod, setProd] = useState([]);
  console.log("prod", prod);

  useEffect(()=>{
      const fetchData=  async ()=>{
          const res= await fetch(`http://localhost:8000/data/${id}`)
          setProd(await res.json())
      }
       fetchData();

  }, [])


  return (
    <>
      <h1>products page</h1>
      <p>products is : {id} </p>
      <button>add</button>
      <button>data page</button>


      <>
              <div className={styles.single}>
                <p>
                  <img src={prod.img} alt="" />
                </p>
                <h1>{prod.name} </h1>
              </div>
              <div>
                <Button onClick={paymentData}> make payment</Button>
              </div>
            </>





      {/* {data

        .filter((el) => {
          if (el.id === params.id) setProd(el.id);
        })
        .map((el) => {
          return (
            <>
              <div className={styles.single}>
                <p>
                  <img src={el.img} alt="" />
                </p>
                <h1>{el.name} </h1>
              </div>
              <div>
                <Button onClick={paymentData}> make payment</Button>
              </div>
            </>
          );
        })} */}
    </>
  );
};

export { Products };
