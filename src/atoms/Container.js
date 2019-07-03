import React from "react";
import { withTheme } from "../core/theming";

import Div from "./Div";

const Container = ({ p, m, theme, ...rest }) => {
  return (
    <Div
      w="100%"
      m={{ y: 0, x: "auto" }}
      p={{ y: 0, x: "1.5rem" }}
      maxW={theme.grid.containerMaxWidth}
      {...rest}
    />
  );
};

export default withTheme(Container);
