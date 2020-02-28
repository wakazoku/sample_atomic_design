import React from "react";
import style from "./style.css";

export const HeadingPresenter = ({
  tag: Tag,
  visualLevel,
  className,
  ...props
}) => {
  return (
    <Tag
      className={[style.h, style[`h${visualLevel}`], className].join(" ")}
      {...props}
    />
  );
};

export const HeadingContainer = ({
  presenter,
  level = 2,
  visualLevel,
  ...props
}) => {
  level = Math.max(1, Math.min(6, level));
  visualLevel = typeof visualLevel !== "undefined" ? visualLevel : level;
  const tag = `h${level}`;

  return presenter({ tag, visualLevel, ...props });
};

const Heading = (props) => {
  return (
    <HeadingContainer
      presenter={(presenterProps) => <HeadingPresenter {...presenterProps} />}
      {...props}
    />
  );
};

export default Heading;
