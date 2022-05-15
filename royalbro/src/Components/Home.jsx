import "./Home.css";
// import DateTime from "./DateTime";
import React from 'react';
import {Data} from './Data';
import {CarouseleSlide} from "./Carsoule"
const Home = () => {

  return (
    <>
      {/* <DateTime/> */}

      <img 
        className="home-img"
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page_web-986bff386c60dfaf5106b17c40f7c04228518a95dff9b04ccd88c81465cec0be.jpg"
        alt="home"
      ></img>
      <div className="home-sani">
        
        <div className="home-sani-ch">Sanitized Vehicles</div>
        <div className="home-sani-ch">Vehicle Insurance</div>
        <div className="home-sani-ch">24/7 Roadside Assistance</div>
        <div className="home-sani-ch">Bike Maintenance</div>
      </div>
      
      <div className="home-sani-div">
        {/* <h1 className="home-sani-h">OUR FLEET</h1> */}
        <h1 className="home-sani-h">Our fleet</h1>
        <div className="home-sani-line"></div>
        <Data />
      </div>

      <div className="home-sani-div">
        <h1 className="home-sani-h">WE BELIEVE IN QUALITY</h1>
        <div className="home-sani-line"></div>
      </div>
      
         <CarouseleSlide/>

      

    </>
  );
};

export {Home};