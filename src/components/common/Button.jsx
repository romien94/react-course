import React from "react";
import Button from "@material-ui/core/Button";

export default (props) => <Button {...props} variant="contained">{props.children}</Button>;