import React from "react";
import styled from "styled-components";
import { themeVars, colorVar } from "../constants/_variables";
import { functions } from "../functions/_functions";

const BaseInputGroup = styled.div`
  display: flex;
  ${props => props.d && functions.makeResponsive("display", props.d)};
  ${props =>
    props.justify &&
    functions.makeResponsive("justify-content", props.justify)};
  ${props =>
    props.align && functions.makeResponsive("align-items", props.align)};
  ${props =>
    props.flexDir && functions.makeResponsive("flex-direction", props.flexDir)};
  ${props =>
    props.flexGrow && functions.makeResponsive("flex-grow", props.flexGrow)};
  ${props =>
    props.flexWrap && functions.makeResponsive("flex-wrap", props.flexWrap)};
  ${props => props.m && functions.findDirection("margin", props.m)};
  ${props => props.p && functions.findDirection("padding", props.p)};
  ${props => props.rounded && functions.findRoundedDirection(props.rounded)};
  ${props => props.border && functions.findDirection("border", props.border)};
  ${props =>
    props.borderColor &&
    functions.makeResponsive("border-color", colorVar[props.borderColor])};
  ${props => props.h && functions.makeResponsive("height", props.h)};
  ${props => props.maxH && functions.makeResponsive("max-height", props.maxH)};
  ${props => props.minH && functions.makeResponsive("min-height", props.minH)};
  ${props => props.w && functions.makeResponsive("width", props.w)};
  ${props => props.maxW && functions.makeResponsive("max-width", props.maxW)};
  ${props => props.minW && functions.makeResponsive("min-width", props.minW)};
  ${props => props.cursor && functions.makeResponsive("cursor", props.cursor)};
  ${props =>
    props.bg && functions.makeResponsive("background", colorVar[props.bg])};
  ${props =>
    props.textColor &&
    functions.makeResponsive("color", colorVar[props.textColor])};
  ${props =>
    props.textWeight && functions.makeResponsive("weight", props.textWeight)};
  ${props =>
    props.textAlign && functions.makeResponsive("align", props.textAlign)};
  ${props =>
    props.shadow && `box-shadow: ${themeVars["shadows"][props.shadow]}`};

  div {
    margin-left: -1px;
    touch-action: manipulation;
    border-radius: 0;

    input {
      border-radius: 0;
    }
    :nth-child(1) input {
      border-top-left-radius: ${props => themeVars["rounded"][props.rounded]};
      border-bottom-left-radius: ${props =>
        themeVars["rounded"][props.rounded]};
    }
    :last-child input {
      border-top-right-radius: ${props => themeVars["rounded"][props.rounded]};
      border-bottom-right-radius: ${props =>
        themeVars["rounded"][props.rounded]};
    }
  }

  button {
    margin-left: -1px;
    touch-action: manipulation;
    border-radius: 0;

    :hover {
      z-index: 2;
    }
    :nth-child(1) {
      border-top-left-radius: ${props => themeVars["rounded"][props.rounded]};
      border-bottom-left-radius: ${props =>
        themeVars["rounded"][props.rounded]};
    }
    :last-child {
      border-top-right-radius: ${props => themeVars["rounded"][props.rounded]};
      border-bottom-right-radius: ${props =>
        themeVars["rounded"][props.rounded]};
    }
  }

  :hover {
    ${props =>
      props.hoverBg &&
      functions.makeResponsive("background", colorVar[props.hoverBg])};
    ${props =>
      props.hoverTextColor &&
      functions.makeResponsive("color", colorVar[props.hoverTextColor])};
    ${props =>
      props.hoverBorderColor &&
      functions.makeResponsive(
        "border-color",
        colorVar[props.hoverBorderColor]
      )};
    ${props =>
      props.hoverShadow &&
      `box-shadow: ${themeVars["shadows"][props.hoverShadow]}`};
  }
`;

const InputGroup = ({ ...rest }) => {
  return <BaseInputGroup {...rest}>{rest.children}</BaseInputGroup>;
};

InputGroup.defaultProps = {
  flexWrap: "wrap",
  rounded: "default"
};

export default InputGroup;
