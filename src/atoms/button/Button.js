import React from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeButtonStyle from "./Button.style";
import Icon from "../icon/Icon";

const Button = React.forwardRef((props, ref) => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const output = computeButtonStyle(props, value);

        const {
          isLoading,
          prefix,
          children,
          suffix,
          textColor,
          tag,
          ...rest
        } = output[0];

        return (
          <BasicButton ref={ref} $as={tag} {...rest} $styleArray={output[1]}>
            {isLoading && (
              <Icon
                name="Loading"
                size="16px"
                m={{ r: "0.5rem" }}
                color={textColor}
              />
            )}
            {prefix}
            {children}
            {suffix}
          </BasicButton>
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BasicButton = styled("button", props => ({
  ...props.$styleArray
}));

Button.defaultProps = {
  tag: "button",
  d: "flex",
  justify: "center",
  align: "center",
  p: { x: "1rem" },
  pos: "relative",
  rounded: "md",
  border: "none",
  h: "2.5rem",
  cursor: "pointer",
  bg: "black",
  textColor: "white",
  textSize: "body",
  textWeight: "500",
  fontFamily: "primary",
  transition: "true",
  disableBg: "gray400",
  disableShadow: "0",
  disableBorderColor: "gray300",
  disableColor: "white"
};

export default Button;
