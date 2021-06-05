import React, { useState } from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
// import CurrencyFormat from "react-currency-format";
function Subtotal() {
  const [{ basket }] = useStateValue();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  let price = 0;

  // for(let i = 0; i<basket.length; i++)
  price = basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <>
      <div className="subtotal">
        <h1>${price}</h1>
        {/* <Link to="/payment">dwadad</Link> */}
        <button>
          <div onClick={(e) => setShow(true)} style={{ width: "100%" }}>
            Proceed to Checkout
          </div>
        </button>
      </div>
      <br />

      <div className="payment" style={show ? {} : { display: "none" }}>
        <h1 className="payment__close" onClick={(e) => setShow(false)}>
          X
        </h1>
        <h3 style={{ textAlign: "center" }}>Your final amount is ${price}</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn">
            <div onClick={(e) => setShow2(true)} style={{ width: "100%" }}>
              Pay
            </div>
          </button>
        </div>
       <h3 style={show2?{textAlign:'center', color:'green'}: {display:'none'}}>Paid</h3>
      </div>
    </>
  );
}

export default Subtotal;
