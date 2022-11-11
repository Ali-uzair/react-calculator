import React, { useEffect, useRef } from "react";
import "./header.css";

const Header=(props) =>{
  const resultref = useRef()
  useEffect(()=>{
    resultref.current.scrollIntoView()
  },[])
  return (
    <div className="header">
      <div className="history"></div>
      <div className="expression">
        <p>10+10+0</p>
        <p>10+10+0</p>

        <p>4545+445</p>
      </div>
      <br />
      <p>{props.result}</p>

      <p ref={resultref} className="result">{props.expression}</p>
    </div>
  );
}

export default Header;
