import React from "react";
import Text from "../text/Text";

const Anchor = React.forwardRef((props, ref) => {
  return <Text ref={ref} tag="a" {...props} />;
});

Anchor.defaultProps = {
  hoverTextColor: "info800",
  textWeight: "500",
  textDecor: "none",
  textColor: "info700",
  cursor: "pointer"
};

export default Anchor;
