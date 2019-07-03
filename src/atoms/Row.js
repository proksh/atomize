import React from "react";
import { withTheme } from "../core/theming";

import Div from "./Div";

const Row = ({ theme, ...rest }) => {
  return (
    <Div m={{ y: 0, x: `calc(-${theme.grid.gutterWidth}/2)` }} {...rest}>
      {rest.children}
    </Div>
  );
};

Row.defaultProps = {
  d: "flex",
  flexWrap: "wrap"
};

export default withTheme(Row);
