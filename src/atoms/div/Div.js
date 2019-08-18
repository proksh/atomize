import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeDivStyle from "./Div.style";

const Div = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeDivStyle(props, value);
        return (
          <BaseDiv
            ref={ref}
            $as={props.tag}
            {...output[0]}
            $styleArray={output[1]}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BaseDiv = styled("div", props => {
  return {
    ...props.$styleArray
  };
});

Div.defaultProps = {
  tag: "div"
};

export default Div;
