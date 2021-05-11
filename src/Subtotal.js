import React from "react";
import "./Subtotal.css"
import { useStateValue } from "./StateProvider";
// import CurrencyFormat from "react-currency-format";
function Subtotal() {
  const [{basket}] = useStateValue();

  let price = 0;

  // for(let i = 0; i<basket.length; i++) 
    price = basket?.reduce((amount, item) => item.price + amount, 0);
  
  // const price = basket.map(x => price+x.price)
    return (
        <div className="subtotal">
          
          <h1>${price}</h1>
          <button>Proceed to Checkout</button>
        </div>
      );
}

export default Subtotal;
