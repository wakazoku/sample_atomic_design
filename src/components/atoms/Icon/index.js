/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./style.css";

export const IconContainer = ({
  presenter,
  onClick,
  className = "",
  ...props
}) => {
  if (onClick) className += `${styles.clickable}`;
  return presenter({ onClick, className, ...props });
};

export const IconPresenter = ({
  iconName,
  height = 20,
  width = 20,
  ...props
}) => (
  <img
    src={`/icons/${iconName}.svg`}
    alt=""
    height={height}
    width={width}
    {...props}
  />
);

export const iconFactory = (iconName) => (props) => {
  return (
    <IconContainer
      presenter={(presenterProps) => <IconPresenter {...presenterProps} />}
      {...{ iconName, ...props }}
    />
  );
};

export const IconContainer2 = function ({
  presenter,
  onClick,
  className = "",
  ...props
}) {
  if (onClick) className += `${styles.clickable}`;
  return presenter({ onClick, className, ...props });
};

export const IconPresenter2 = function ({
  iconName,
  height = 20,
  width = 20,
  ...props
}) {
  return (
    <img
      src={`/icons/${iconName}.svg`}
      alt=""
      height={height}
      width={width}
      {...props}
    />
  );
};

export const iconFactory2 = function (iconName) {
  return function (props) {
    return (
      <IconContainer2
        presenter={function (presenterProps) {
          return <IconPresenter2 {...presenterProps} />;
        }}
        {...{ iconName, ...props }}
      />
    );
  };
};

export const TrashCanIcon = iconFactory2("trash-can");
export const ChevronRightIcon = iconFactory("chevron-right");
export const SearchIcon = iconFactory("search");
export const SettingIcon = iconFactory("settings");
