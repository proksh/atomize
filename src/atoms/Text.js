import React from "react";
import styled from "styled-components";
import { textSize } from "../constants/_variables";
import { functions } from "../functions/_functions";
import { withTheme } from "../core/theming";

/**
 * Custom Tag For tags other than p
 */
const CustomTag = ({
  d,
  pos,
  top,
  bottom,
  left,
  right,
  h,
  maxH,
  minH,
  justify,
  align,
  flexDir,
  flexGrow,
  flexWrap,
  order,
  rounded,
  m,
  p,
  bg,
  hoverBg,
  textColor,
  textWeight,
  textAlign,
  textTransform,
  textDecor,
  textSize,
  transition,
  w,
  maxW,
  minW,
  fontFamily,
  opacity,
  hoverTextColor,
  tag,
  children,
  theme,
  ...props
}) => {
  return React.createElement(`${tag}`, props, children);
};

/**
 * Style the Text
 */
const Text = styled(CustomTag)`
  margin: 0;
  padding: 0;
  ${props => props.d && functions.makeResponsive("display", props.d)};
  ${props => props.pos && functions.makeResponsive("position", props.pos)};
  ${props => props.top && functions.makeResponsive("top", props.top)};
  ${props => props.bottom && functions.makeResponsive("bottom", props.bottom)};
  ${props => props.left && functions.makeResponsive("left", props.left)};
  ${props => props.right && functions.makeResponsive("right", props.right)};
  ${props => props.h && functions.makeResponsive("height", props.h)};
  ${props => props.maxH && functions.makeResponsive("max-height", props.maxH)};
  ${props => props.minH && functions.makeResponsive("min-height", props.minH)};
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
  ${props =>
    props.rounded &&
    functions.findRoundedDirection(props.rounded, props.theme.rounded)};
  ${props => props.m && functions.findDirection("margin", props.m)};
  ${props => props.p && functions.findDirection("padding", props.p)};
  ${props =>
    props.bg &&
    functions.makeResponsive("background", props.theme.colors[props.bg])};
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
  ${props =>
    props.textDecor &&
    functions.makeResponsive("text-decoration", props.textDecor)};
  ${props => props.cursor && `cursor: ${props.cursor};`};
  ${props =>
    props.textSize &&
    functions.makeResponsiveFontSize(props.textSize, props.theme.textSize)};
  ${props => props.transition && `transition: ${props.theme.transition}`};
  ${props => props.order && functions.makeResponsive("order", props.order)};
  ${props => props.w && functions.makeResponsive("width", props.w)};
  ${props => props.maxW && functions.makeResponsive("max-width", props.maxW)};
  ${props => props.minW && functions.makeResponsive("min-width", props.minW)};
  ${props =>
    props.fontFamily &&
    `font-family: ${props.theme.fontFamily[props.fontFamily]}`};
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
  }
`;

Text.defaultProps = {
  tag: "p"
};

export default withTheme(Text);
