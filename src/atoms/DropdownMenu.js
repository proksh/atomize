import React from "react";

import Div from "./Div";

const DropdownMenu = ({ open, ...rest }) => {
  return (
    <Div
      {...rest}
      onClick={e => {
        e.stopPropagation();
      }}
    />
  );
};

DropdownMenu.defaultProps = {
  pos: "absolute",
  shadow: "4",
  minW: "100%",
  p: { x: "1rem", y: "0.5rem" },
  rounded: "md",
  bg: "white"
};

export default DropdownMenu;
