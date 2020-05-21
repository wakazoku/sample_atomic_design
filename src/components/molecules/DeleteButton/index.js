import React from "react";
import styles from "./styles.css";
import { TrashCanIcon } from "../../atoms/Icon/index";
import Balloon from "../../atoms/Balloon/index";
import HoverTipInteraction, { Tip } from "../../atoms/HoverTipInteraction";

const DeleteButton = ({ className, onClick, ...props }) => (
  <HoverTipInteraction
    className={[styles.root, className].join(" ")}
    {...props}
  >
    <TrashCanIcon onClick={onClick} />
    <Tip>
      <Balloon>削除する</Balloon>
    </Tip>
  </HoverTipInteraction>
);

export default DeleteButton;
