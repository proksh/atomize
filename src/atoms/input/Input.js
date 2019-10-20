import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeInputStyle from "./Input.style";
import Div from "../div/Div";
import Icon from "../icon/Icon";

const Input = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeInputStyle(props, value);
        const {
          children,
          prefix,
          isLoading,
          suffix,
          order,
          tag,
          ...rest
        } = output[0];
        return (
          <Div
            pos="relative"
            d={rest.d}
            m={rest.m}
            w={rest.w}
            order={order}
            maxW={rest.maxW}
            minW={rest.minW}
            flexGrow={rest.flexGrow}
          >
            {prefix}
            <BasicInput ref={ref} {...rest} $as={tag} $styleArray={output[1]} />
            {suffix}
            {isLoading && (
              <Icon
                name={"Loading"}
                pos="absolute"
                top="50%"
                right="0.75rem"
                transform="translateY(-50%)"
                size="16px"
              />
            )}
          </Div>
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BasicInput = styled("input", props => {
  return {
    ...props.$styleArray
  };
});

Input.contextType = ThemeContext;

Input.defaultProps = {
  tag: "input",
  d: "flex",
  p: { x: "0.75rem" },
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  h: "2.5rem",
  w: "100%",
  bg: "white",
  textColor: "dark",
  textWeight: "500",
  focusBorderColor: "gray900",
  placeholderTextColor: "light",
  transition: "true"
};

export default Input;
