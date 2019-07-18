import React from "react";
import styled from "styled-components";
import { functions } from "../functions/_functions";
import { withTheme } from "../core/theming";

import Div from "./Div";
import Icon from "./Icon";

const CustomTag = React.forwardRef((props, ref) => {
  const {
    d,
    m,
    w,
    maxW,
    minW,
    flexGrow,
    order,
    p,
    rounded,
    pos,
    border,
    borderColor,
    h,
    maxH,
    minH,
    cursor,
    bg,
    textColor,
    textWeight,
    textAlign,
    shadow,
    transition,
    textSize,
    fontFamily,
    hoverBg,
    hoverTextColor,
    hoverBorderColor,
    hoverShadow,
    focusBg,
    focusTextColor,
    focusShadow,
    focusBorderColor,
    tag,
    children,
    ...rest
  } = props;
  return React.createElement(`${tag}`, { ...rest, ref }, children);
});

const BaseInput = styled(CustomTag)`
  box-sizing: border-box;
  ${props =>
    props.flexGrow && functions.makeResponsive("flex-grow", props.flexGrow)};
  ${props => functions.findDirection("padding", props.p)};
  ${props =>
    functions.findRoundedDirection(props.rounded, props.theme.rounded)};
  ${props => functions.findDirection("border", props.border)};
  ${props => props.pos && functions.makeResponsive("position", props.pos)};

  ${props =>
    functions.makeResponsive(
      "border-color",
      props.theme.colors[props.borderColor]
    )};

  ${props => functions.makeResponsive("height", props.h)};
  ${props => props.maxH && functions.makeResponsive("max-height", props.maxH)};
  ${props => props.minH && functions.makeResponsive("min-height", props.minH)};
  ${props => functions.makeResponsive("width", props.w)};
  ${props => props.maxW && functions.makeResponsive("max-width", props.maxW)};
  ${props => props.minW && functions.makeResponsive("min-width", props.minW)};
  ${props => props.cursor && functions.makeResponsive("cursor", props.cursor)};
  ${props =>
    functions.makeResponsive("background", props.theme.colors[props.bg])};
  ${props =>
    functions.makeResponsive("color", props.theme.colors[props.textColor])};
  ${props =>
    props.textWeight &&
    functions.makeResponsive("font-weight", props.textWeight)};
  ${props =>
    props.textAlign && functions.makeResponsive("align", props.textAlign)};
  ${props =>
    props.fontFamily &&
    `font-family: ${props.theme.fontFamily[props.fontFamily]}`};
  ${props =>
    props.shadow && `box-shadow: ${props.theme.shadows[props.shadow]}`};
  ${props => props.transition && `transition: ${props.theme.transition}`};
  ${props =>
    `font-size: ${props.theme.textSize.size[props.textSize]}; line-height: ${
      props.theme.textSize.height[props.textSize]
    };`};

  :hover {
    ${props =>
      props.hoverBg &&
      functions.makeResponsive(
        "background",
        props.theme.colors[props.hoverBg]
      )};
    ${props =>
      props.hoverTextColor &&
      functions.makeResponsive(
        "color",
        props.theme.colors[props.hoverTextColor]
      )};
    ${props =>
      props.hoverBorderColor &&
      functions.makeResponsive(
        "border-color",
        props.theme.colors[props.hoverBorderColor]
      )};
    ${props =>
      props.hoverShadow &&
      `box-shadow: ${props.theme["shadows"][props.hoverShadow]}`};
  }

  :focus {
    outline: none;
    ${props =>
      props.focusBg &&
      functions.makeResponsive(
        "background",
        props.theme.colors[props.focusBg]
      )};
    ${props =>
      props.focusTextColor &&
      functions.makeResponsive(
        "color",
        props.theme.colors[props.focusTextColor]
      )};
    ${props =>
      props.focusBorderColor &&
      functions.makeResponsive(
        "border-color",
        props.theme.colors[props.focusBorderColor]
      )};
    ${props =>
      props.focusShadow &&
      `box-shadow: ${props.theme["shadows"][props.focusShadow]}`};
  }

  ::placeholder {
    ${props =>
      props.placeholderTextColor
        ? functions.makeResponsive(
            "color",
            props.theme.colors[props.placeholderTextColor]
          )
        : `color: ${props.theme.colors["light"]}`};
  }

  :disabled {
    color: ${props => props.theme.colors["medium"]};
    cursor: not-allowed;
    background: ${props => props.theme.colors["gray200"]};
  }
`;

const Input = ({ children, prefix, isLoading, suffix, order, ...rest }) => {
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
      <BaseInput {...rest} />
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
};

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
  focusBorderColor: "gray700",
  transition: true
};

export default withTheme(Input);
