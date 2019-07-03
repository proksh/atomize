import React from "react";

import Text from "./Text";

const Anchor = ({ ...rest }) => {
  return <Text tag="a" {...rest} />;
};

Anchor.defaultProps = {
  hoverTextColor: "info800",
  textWeight: "500",
  textDecor: "none",
  textColor: "info700",
  cursor: "pointer"
};

export default Anchor;
