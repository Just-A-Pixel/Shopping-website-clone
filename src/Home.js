import React from "react";
import "./Home.css";
import Product from "./Product";
import {motion} from 'framer-motion';
import { useStateValue } from "./StateProvider";
import {home} from "./pagevariants"


// const pageVariants = {
//   initial: {
//     opacity: 0,
//   },
//   in: {
    
//     opacity: 1,
//     transition: {delay: 0.5}
//   },
//   out: {
   
//   },
// }



function Home() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <motion.div
    initial="initial"
    animate="in"
    variants={home}
    className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        /> */}

        <div className="home__row">
          <Product id={`1${basket.length}`} price={100} title="Green Shoes" image='https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png' rating={3}/>
          <Product id={`2${basket.length}`} price={200} title="Red Shoes" image='https://pngimg.com/uploads/running_shoes/running_shoes_PNG5823.png' rating={4}/>
        </div>

        <div className="home__row">
          <Product id={`3${basket.length}`} price={50} title="White Shoes" image='http://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png' rating={5}/>
          <Product id={`4${basket.length}`} price={60} title="Black Shoes" image='http://www.pngall.com/wp-content/uploads/2/Black-Sneakers-PNG.png' rating={1}/>
          <Product id={`5${basket.length}`} price={500} title="Orange Shoes" image='https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png' rating={2}/>
        </div>

        <div className="home__row">
          <Product id={`6${basket.length}`} price={1000} title="Limited Edition shoes" image='https://pngimg.com/uploads/converse/converse_PNG41.png' rating={5}/>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
