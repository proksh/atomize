import React, { useContext } from "react";
import { ThemeContext } from "../../core/ThemeContext";
import Div from "../div/Div";

const Row = React.forwardRef((props, ref) => {
  const context = useContext(ThemeContext);

  return (
    <Div
      ref={ref}
      m={{ y: 0, x: `calc(-${context.grid.gutterWidth}/2)` }}
      {...props}
    >
      {props.children}
    </Div>
  );
});

Row.defaultProps = {
  d: "flex",
  flexWrap: "wrap"
};

export default Row;
