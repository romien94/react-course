import React from "react";
import styles from "./Input.module.css";

export default ({
  className,
  input,
  value,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <>
      <input
        {...input}
        placeholder={placeholder}
        id={id}
        type={type}
        className={`${className} ${touched && error? styles.inputError:''}`}
        value={value}
        {...rest}
      ></input>
      {touched && error && <span className={styles.error}>{error}</span>}
    </>
  );
};
