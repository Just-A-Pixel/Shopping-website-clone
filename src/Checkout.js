import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import {AnimatePresence, motion} from 'framer-motion';
import {checkout} from './pagevariants';


function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);
  return (
    <motion.div 
    className="checkout"
    initial="initial"
    animate="in"
    exit="out"
    variants={checkout}
    >
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          <div>
            {basket.map((x) => {
              return (
              <CheckoutProduct id={x.id} image={x.image} title={x.title} price={x.price} rating={2} />
              );
            })}
          </div>

          
        </div>
      </div>
      <div className="checkout__right">
        {/* <Subtotal /> */}
        <Subtotal />
      </div>
    </motion.div>
  );
}

export default Checkout;
