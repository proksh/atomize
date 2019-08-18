import React from "react";
import Div from "../div/Div";

const Tag = React.forwardRef((props, ref) => {
  const { children, prefix, suffix, ...rest } = props;

  return (
    <Div {...rest} ref={ref}>
      {prefix}
      {children}
      {suffix}
    </Div>
  );
});

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
