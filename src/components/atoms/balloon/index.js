import React from "react";
import styles from "./style.css";
import HoverTipInteraction, { Tip, Marker } from "../HoverTipInteraction";

const Balloon = ({ children, className, ...props }) => (
  <span className={[styles.balloon, className].join(" ")} {...props}>
    {children}
  </span>
);

export const BalloonTip = ({ children, label, className, ...props }) => (
  <HoverTipInteraction className={className} {...props}>
    <Marker>
      <span>{children}</span>
    </Marker>
    <Tip>
      <Balloon>{label}</Balloon>
    </Tip>
  </HoverTipInteraction>
);
