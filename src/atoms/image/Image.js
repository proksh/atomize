import React, { Component } from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeImageStyle from "./Image.style";

const Image = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeImageStyle(props, value);
        return <BaseImg ref={ref} {...output[0]} $styleArray={output[1]} />;
      }}
    </ThemeContext.Consumer>
  );
});

const BaseImg = styled("img", props => {
  return {
    ...props.$styleArray
  };
});

Image.defaultProps = {
  w: "100%"
};

export default Image;
