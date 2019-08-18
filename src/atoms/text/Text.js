import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeTextStyle from "./Text.style";

const Text = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeTextStyle(props, value);

        return (
          <BasicText
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

const BasicText = styled("p", props => {
  return {
    ...props.$styleArray
  };
});

Text.defaultProps = {
  tag: "p",
  m: "0",
  p: "0"
};

export default Text;
