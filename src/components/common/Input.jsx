import React from "react";
import Input from "@material-ui/core/Input"

export default ({input, value, type, placeholder, id, meta: {touched, error}, ...rest}) => {
  return (
    <>
      <Input {...input} placeholder={placeholder} id={id} type={type}/>
      {touched && error && <span>{error}</span>}
    </>
  )
}