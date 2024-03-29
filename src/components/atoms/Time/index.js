import React from "react";
import moment from "moment";
import "moment/locale/ja";

export const TimePresenter = (props) => <time {...props} />;

export const TimeContainer = ({
  presenter,
  children: value,
  dateTime,
  format = "MM月DD日(ddd)HH:MM:mm",
  ...props
}) => {
  value = parseInt(value, 10);
  var children;
  if (!isValid(value)) {
    children = "有効な時間表現ではありません";
  } else {
    children = formatDateTime(value, format);
  }

  if (!dateTime) {
    dateTime = formatDateTime(value);
  }

  return presenter({ children, dateTime, ...props });
};

const Time = (props) => (
  <TimeContainer
    presenter={(presenterProps) => <TimePresenter {...presenterProps} />}
    {...props}
  />
);

export default Time;

function isValid(unixtime) {
  return moment(unixtime, "x", true).isValid();
}

function formatDateTime(datetime, format = "YYYY-MM-DDTHH:mm") {
  return moment(datetime).format(format);
}
