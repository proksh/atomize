import React from "react";

import Div from "./Div";

const Tag = ({ children, prefix, suffix, ...rest }) => {
  return (
    <Div {...rest}>
      {prefix}
      {children}
      {suffix}
    </Div>
  );
};

Tag.defaultProps = {
  tag: "span",
  d: "inline-flex",
  align: "center",
  textAlign: "center",
  justify: "center",
  bg: "gray300",
  textWeight: "500",
  rounded: "sm",
  p: { x: "0.5rem", y: "0.125rem" },
  textColor: "medium",
  textSize: "caption"
};

export default Tag;
