import React, { Component } from "react";
import styled from "styled-components";
import { iconPaths } from "../constants/_iconPaths";
import { functions } from "../functions/_functions";
import { withTheme } from "../core/theming";

const BaseIcon = ({
  d,
  size,
  order,
  m,
  p,
  transform,
  top,
  bottom,
  left,
  right,
  cursor,
  name,
  color,
  hoverColor,
  ...rest
}) => {
  const IconName = iconPaths[name];
  return (
    <svg viewBox="0 0 24 24" {...rest}>
      <IconName color={rest.theme.colors[color]} />
    </svg>
  );
};

const Icon = styled(BaseIcon)`
  ${props => props.d && functions.makeResponsive("display", props.d)};
  ${props => functions.makeResponsive("height", props.size)};
  ${props => functions.makeResponsive("width", props.size)};
  ${props => functions.makeResponsive("min-width", props.size)};
  ${props => functions.makeResponsive("min-height", props.size)};

  ${props => props.order && functions.makeResponsive("order", props.order)};

  ${props => props.m && functions.findDirection("margin", props.m)};
  ${props => props.p && functions.findDirection("padding", props.p)};
  ${props => props.pos && functions.makeResponsive("position", props.pos)};
  ${props =>
    props.transform && functions.makeResponsive("transform", props.transform)};
  ${props => props.top && functions.makeResponsive("top", props.top)};
  ${props => props.bottom && functions.makeResponsive("bottom", props.bottom)};
  ${props => props.left && functions.makeResponsive("left", props.left)};
  ${props => props.right && functions.makeResponsive("right", props.right)};
  ${props => props.cursor && functions.makeResponsive("cursor", props.cursor)};

  ${props =>
    props.hoverColor &&
    `
    :hover {
      path {
        transition: ${props.theme.transition};
        fill: ${props.theme.colors[props.hoverColor]};
      }
      circle {
        transition: ${props.theme.transition};
        fill: ${props.theme.colors[props.hoverColor]};
      }
  `}
`;

Icon.defaultProps = {
  size: "1.5rem",
  color: "black"
};

export default withTheme(Icon);
