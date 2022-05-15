import Carousel, { CarouselItem } from "./Cars";
import React from "react";
import styles from "./CarsouleS.module.css";
import { height } from "@mui/system";

const CarouseleS= ()=> {
  return (
    <Carousel autoplay className="App" >
      
      <CarouselItem className={styles.Carousel__solo}>
      
        <img style={{width:"500px", height:"200px"}}
          alt="sliderOne"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/the_better_india-09cca403fbe2fe19974cb1701aaa87fce8e587f32a18bc477ebf28f05e1c1788.png"
        ></img>
      </CarouselItem>
      <CarouselItem className={styles.Carousel__solo}>
        <img style={{width:"500px", height:"200px"}}
          alt="sliderTwo"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news3-2eb9e0398a565284ca3c41d685e32de985b43ce00541889f59541ee91cb28e61.png"
        ></img>
      </CarouselItem>
      <CarouselItem className={styles.Carousel__solo}>
        <img style={{width:"500px", height:"200px"}}
          alt="sliderThree"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/inc_42-59ce79f32655b91f34e9ed4e5d53175f446ea263b57ffc85fd3572a1a4a1aade.jpg"
        ></img>
      </CarouselItem>


      <CarouselItem className={styles.Carousel__solo}>
        <img style={{width:"500px", height:"200px"}}
          alt="sliderFour"
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/inc_42-59ce79f32655b91f34e9ed4e5d53175f446ea263b57ffc85fd3572a1a4a1aade.jpg"
        ></img>
      </CarouselItem>


    </Carousel>
  );
}

export {CarouseleS};