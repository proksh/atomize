import React from "react";
import styled from "styled-components";
import { themeVars, colorVar } from "../constants/_variables";
import { functions } from "../functions/_functions";
import { withTheme } from "../core/theming";

const BaseImg = styled.img`
  box-sizing: border-box;
  ${props => props.d && functions.makeResponsive("display", props.d)};
  ${props => props.pos && functions.makeResponsive("position", props.pos)};
  ${props => props.top && functions.makeResponsive("top", props.top)};
  ${props => props.bottom && functions.makeResponsive("bottom", props.bottom)};
  ${props => props.left && functions.makeResponsive("left", props.left)};
  ${props => props.right && functions.makeResponsive("right", props.right)};
  ${props =>
    props.flexGrow && functions.makeResponsive("flex-grow", props.flexGrow)};
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
    props.shadow &&
    functions.makeResponsive("box-shadow", props.theme.shadows[props.shadow])};
  ${props =>
    props.transform && functions.makeResponsive("transform", props.transform)};
  ${props =>
    props.transformOrigin &&
    functions.makeResponsive("transform-origin", props.transformOrigin)};
  ${props => props.zIndex && functions.makeResponsive("z-index", props.zIndex)};
  ${props => props.opacity && `opacity: ${props.opacity}`};

  :hover {
    ${props =>
      props.hoverBorderColor &&
      functions.makeResponsive(
        "border-color",
        colorVar[props.hoverBorderColor]
      )};
    ${props =>
      props.hoverShadow &&
      `box-shadow: ${props.theme.shadows[props.hoverShadow]}`};
  }
`;

const Image = ({ ...rest }) => {
  return <BaseImg {...rest}>{rest.children}</BaseImg>;
};

Image.defaultProps = {
  w: "100%"
};

export default withTheme(Image);
