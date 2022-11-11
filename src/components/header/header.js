import React from "react";
import "./header.css";

const Header = (props) => {
  // console.log(props.expression)

  // props.setResult(props.expression)

  const setexp = (item) => {
    props.setExpression(item.item);
    console.log(item.item);
  };
  return (
    <div className="header">
      <div className="history">
        {props.history?.map((item) => (
          <p key={item + Math.random() * 44} onClick={() => setexp({ item })}>
            {item}
          </p>
        ))}
      </div>
      <div className="expression">
        <p>{props.expression}</p>
      </div>
      <br />
      <p ref={props.resultref} className="result">
        {props.result}
      </p>
    </div>
  );
};

export default Header;
