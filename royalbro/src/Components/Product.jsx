import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import styles from "./Data.module.css";

import { getData } from "../Redux/post/action";

const Products = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://royaldatabase.herokuapp.com/data/${id}`);
      setProd(await res.json());
    };
    fetchData();
  }, []);

  return (

      <>
        <div className={styles.singleProduct}>
          <div className={styles.single}>
            <p className={styles.name}>SUMMARY </p>

            <img src={prod.img} alt="" />
            <p className={styles.name}>{prod.name} </p>
          </div>

          <div className={styles.single}>
            <p className={styles.name}>{prod.name} </p>
            <p className={styles.contain}> booking Time: {prod.booktime}</p>
            <p className={styles.contain}> Km limit: {prod.kmlimit}</p>
            <p className={styles.contain}> km: {prod.exkm}</p>
          </div>

          <div className={styles.paymentbox}>
            <p className={styles.contain}>booking price: {prod.price}</p>
            <p className={styles.button}>
              <Button
                onClick={() => {
                  navigate(`/paymentpage`);
                }}
                className={styles.book}
              >
                Make Payment
              </Button>
            </p>
          </div>
        </div>
      </>
  );
};

export { Products };




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
    
