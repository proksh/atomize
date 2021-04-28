import React from "react";
import Div from "./div";

const Flex = ({ col, children, ...rest }) => {
  return (
    <Div d="flex" flexDir={col ? "column" : "row"} {...rest}>
      {children}
    </Div>
  );
};

export default Flex;
