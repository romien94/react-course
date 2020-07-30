import React from "react";
import styles from './Button.module.css';

export default (props) => <button {...props} variant="contained">{props.children}</button>;