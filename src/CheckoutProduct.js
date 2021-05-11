import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { AnimatePresence, motion } from "framer-motion";



function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  // eslint-disable-next-line
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <AnimatePresence EnterBeforeExit>
      <motion.div
      key = {id}
        className="checkoutProduct"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        
      >
        <img className="checkoutProduct__image" src={image} alt=''/>

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CheckoutProduct;
