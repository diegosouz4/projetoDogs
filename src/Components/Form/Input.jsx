import React from "react";
import style from "./Input.module.css";

function Input({ label, type, name, value, onChange, error, onBlur }) {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={name}>{label}</label>
      <input id={name} className={style.input} type={type} onChange={onChange} onBlur={onBlur} value={value} />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

export default Input;
