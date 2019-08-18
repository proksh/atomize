import React from "react";
import Div from "../div/Div";

const Label = React.forwardRef((props, ref) => {
  return <Div ref={ref} tag="label" {...props} />;
});

Label.defaultProps = {
  flexWrap: "wrap",
  textSize: "body",
  d: "flex",
  align: "flex-start",
  cursor: "pointer",
  tabIndex: "0"
};

export default Label;
