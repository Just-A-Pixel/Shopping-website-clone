import React, { useState } from "react";
import "./Admin.css";
function Admin() {
    const [show, setShow] = useState(true); 

  return (
    <>
    {/* Popup */}
      <div style={show?{display: "flex", justifyContent: "center"}:{ display:'none' }}>
        <div className="admin__login">
          <input className="admin__input" type="text" placeholder="username"/> <br />
          <input className="admin__input" type="password" placeholder="password"/>
          <div className="admin__btn" onClick={e=>setShow(false)}>Login</div>
        </div>
      </div>


      <div className="add__items">
        <div className="item">
           <em>Remove</em> | Item 1 | <em>Add</em>
        </div>
        <div className="item">
        <em>Remove</em> | Item 2 | <em>Add</em>
        </div>
        <div className="item">
        <em>Remove</em> | Item 3 | <em>Add</em>
        </div>
      </div>
    </>
  );
}

export default Admin;
