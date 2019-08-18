import React, { useContext } from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeColStyle from "./Col.style";
import Div from "../div/Div";

const Col = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeColStyle(props, value);
        return (
          <BaseCol
            ref={ref}
            p={{ y: "0", x: `calc(${value.grid.gutterWidth}/2)` }}
            {...output[0]}
            $styleArray={output[1]}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BaseCol = styled(Div, props => {
  return {
    ...props.$styleArray
  };
});

export default Col;
