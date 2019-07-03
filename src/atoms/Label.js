import React from "react";
import Div from "./Div";

const Label = ({ ...rest }) => {
  return (
    <Div tag="label" {...rest}>
      {rest.children}
    </Div>
  );
};

Label.defaultProps = {
  flexWrap: "wrap",
  textSize: "body",
  d: "flex",
  align: "flex-start",
  cursor: "pointer"
};

export default Label;
