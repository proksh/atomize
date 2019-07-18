import React from "react";
import styled from "styled-components";
import { functions } from "../functions/_functions";
import { withTheme } from "../core/theming";

import Icon from "./Icon";

const BaseButton = React.forwardRef((props, ref) => {
  const {
    d,
    pos,
    top,
    bottom,
    left,
    right,
    justify,
    align,
    flexDir,
    flexGrow,
    flexWrap,
    order,
    m,
    p,
    rounded,
    border,
    borderColor,
    h,
    maxH,
    minH,
    w,
    minW,
    maxW,
    cursor,
    textSize,
    textColor,
    textWeight,
    textAlign,
    textTransform,
    fontFamily,
    shadow,
    transition,
    transform,
    transformOrigin,
    zIndex,
    overflow,
    opacity,
    hoverBg,
    hoverTextColor,
    hoverBorderColor,
    hoverShadow,
    focusBorderColor,
    theme,
    prefix,
    isLoading,
    suffix,
    children,
    ...rest
  } = props;
  return (
    <button ref={ref} {...rest}>
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
    </button>
  );
});

const Button = styled(BaseButton)`
  ${props => functions.makeResponsive("display", props.d)};
  ${props => props.pos && functions.makeResponsive("position", props.pos)};
  ${props => props.top && functions.makeResponsive("top", props.top)};
  ${props => props.bottom && functions.makeResponsive("bottom", props.bottom)};
  ${props => props.left && functions.makeResponsive("left", props.left)};
  ${props => props.right && functions.makeResponsive("right", props.right)};
  ${props => functions.makeResponsive("justify-content", props.justify)};
  ${props => functions.makeResponsive("align-items", props.align)};
  ${props =>
    props.flexDir && functions.makeResponsive("flex-direction", props.flexDir)};
  ${props =>
    props.flexWrap && functions.makeResponsive("flex-wrap", props.flexWrap)};
  ${props => props.order && functions.makeResponsive("order", props.order)};

  ${props =>
    props.flexGrow && functions.makeResponsive("flex-grow", props.flexGrow)};
  ${props => props.m && functions.findDirection("margin", props.m)};
  ${props => functions.findDirection("padding", props.p)};
  ${props =>
    functions.findRoundedDirection(props.rounded, props.theme.rounded)};
  ${props => functions.findDirection("border", props.border)};
  ${props =>
    props.borderColor &&
    functions.makeResponsive(
      "border-color",
      props.theme.colors[props.borderColor]
    )};
  ${props => functions.makeResponsive("height", props.h)};
  ${props => props.maxH && functions.makeResponsive("max-height", props.maxH)};
  ${props => props.minH && functions.makeResponsive("min-height", props.minH)};
  ${props => props.w && functions.makeResponsive("width", props.w)};
  ${props => props.maxW && functions.makeResponsive("max-width", props.maxW)};
  ${props => props.minW && functions.makeResponsive("min-width", props.minW)};
  ${props => functions.makeResponsive("cursor", props.cursor)};
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
    props.textTransform &&
    functions.makeResponsive("text-transform", props.textTransform)};
  ${props =>
    props.shadow && `box-shadow: ${props.theme.shadows[props.shadow]}`};
  ${props => props.transition && `transition: ${props.theme.transition}`};
  ${props =>
    props.textSize &&
    functions.makeResponsiveFontSize(props.textSize, props.theme.textSize)};
  ${props =>
    props.fontFamily &&
    `font-family: ${props.theme.fontFamily[props.fontFamily]}`};
  ${props =>
    props.transform && functions.makeResponsive("transform", props.transform)};
  ${props =>
    props.transformOrigin &&
    functions.makeResponsive("transform-origin", props.transformOrigin)};
  ${props => props.zIndex && functions.makeResponsive("z-index", props.zIndex)};
  ${props => props.overflow && `overflow: ${props.overflow}`};
  ${props =>
    props.opacity && functions.makeResponsive("opacity", props.opacity)};

  :focus {
    outline: none;
  }

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
      `box-shadow: ${props.theme.shadows[props.hoverShadow]}`};
  }

  :disabled {
    color: white;
    border: none;
    cursor: not-allowed;
    box-shadow: none;
    background: ${props => props.theme.colors["gray400"]};
  }
`;

Button.defaultProps = {
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
  transition: true
};

export default withTheme(Button);
