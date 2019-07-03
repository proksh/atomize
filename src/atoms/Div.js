import React from "react";
import styled from "styled-components";
import { functions } from "../functions/_functions";
import { withTheme } from "../core/theming";

const CustomTag = ({
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
  bg,
  bgImg,
  bgSize,
  bgRepeat,
  bgPos,
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
  isOpen,
  hover,
  offset,
  size,
  targetHover,
  theme,
  tag,
  children,
  ...rest
}) => {
  return React.createElement(`${tag}`, rest, children);
};

const Div = styled(CustomTag)`
  box-sizing: border-box;
  ${props => props.d && functions.makeResponsive("display", props.d)};
  ${props => props.pos && functions.makeResponsive("position", props.pos)};
  ${props => props.top && functions.makeResponsive("top", props.top)};
  ${props => props.bottom && functions.makeResponsive("bottom", props.bottom)};
  ${props => props.left && functions.makeResponsive("left", props.left)};
  ${props => props.right && functions.makeResponsive("right", props.right)};
  ${props =>
    props.justify &&
    functions.makeResponsive("justify-content", props.justify)};
  ${props =>
    props.align && functions.makeResponsive("align-items", props.align)};
  ${props =>
    props.flexDir && functions.makeResponsive("flex-direction", props.flexDir)};
  ${props =>
    props.flexGrow && functions.makeResponsive("flex", props.flexGrow)};
  ${props =>
    props.flexWrap && functions.makeResponsive("flex-wrap", props.flexWrap)};
  ${props => props.order && functions.makeResponsive("order", props.order)};
  ${props => props.m && functions.findDirection("margin", props.m)};
  ${props => props.p && functions.findDirection("padding", props.p)};
  ${props =>
    props.rounded &&
    functions.findRoundedDirection(props.rounded, props.theme.rounded)};
  ${props => props.border && functions.findDirection("border", props.border)};
  ${props =>
    props.borderColor &&
    functions.makeResponsive(
      "border-color",
      props.theme.colors[props.borderColor]
    )};
  ${props => props.h && functions.makeResponsive("height", props.h)};
  ${props => props.maxH && functions.makeResponsive("max-height", props.maxH)};
  ${props => props.minH && functions.makeResponsive("min-height", props.minH)};
  ${props => props.w && functions.makeResponsive("width", props.w)};
  ${props => props.maxW && functions.makeResponsive("max-width", props.maxW)};
  ${props => props.minW && functions.makeResponsive("min-width", props.minW)};
  ${props => props.cursor && functions.makeResponsive("cursor", props.cursor)};
  ${props =>
    props.bg &&
    functions.makeResponsive("background", props.theme.colors[props.bg])};
  ${props => props.bgImg && `background-image: url(${props.bgImg})`};
  ${props =>
    props.bgSize && functions.makeResponsive("background-size", props.bgSize)};
  ${props =>
    props.bgRepeat &&
    functions.makeResponsive("background-repeat", props.bgRepeat)};
  ${props =>
    props.bgPos &&
    functions.makeResponsive("background-position", props.bgPos)};
  ${props =>
    props.textSize &&
    functions.makeResponsiveFontSize(props.textSize, props.theme.textSize)};
  ${props =>
    props.textColor &&
    functions.makeResponsive("color", props.theme.colors[props.textColor])};
  ${props =>
    props.textWeight &&
    functions.makeResponsive("font-weight", props.textWeight)};
  ${props =>
    props.textAlign && functions.makeResponsive("text-align", props.textAlign)};
  ${props =>
    props.textTransform &&
    functions.makeResponsive("text-transform", props.textTransform)};
  ${props => props.transition && `transition: ${props.theme.transition}`};
  ${props =>
    props.transform && functions.makeResponsive("transform", props.transform)};
  ${props =>
    props.shadow &&
    functions.makeResponsiveShadow(props.shadow, props.theme.shadows)};
  ${props =>
    props.transformOrigin &&
    functions.makeResponsive("transform-origin", props.transformOrigin)};
  ${props => props.zIndex && functions.makeResponsive("z-index", props.zIndex)};
  ${props => props.overflow && `overflow: ${props.overflow}`};
  ${props =>
    props.opacity && functions.makeResponsive("opacity", props.opacity)};

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
      functions.makeResponsiveShadow(props.hoverShadow, props.theme.shadows)};
  }
`;

Div.defaultProps = {
  tag: "div"
};

export default withTheme(Div);
