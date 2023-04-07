import React from "react";
import style from "./Button.module.css";

function Button({ children, ...props }) {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
}

export default Button;
