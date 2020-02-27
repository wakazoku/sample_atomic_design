import React from "react";
import styles from "./style.css";

const Balloon = ({ children, className, ...props }) => (
  <span className={[styles.balloon, className].join(" ")} {...props}>
    {children}
  </span>
);

export default Balloon;
