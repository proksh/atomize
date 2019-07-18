import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { withTheme } from "../core/theming";

import Div from "./Div";
import Icon from "./Icon";

const BaseDropdown = styled(Div)`
  > div:last-child {
    position: absolute;
    z-index: 10;
    ${props => findDropdownDir(props.direction)}
    transition: all 0.2s ease-in-out;
    opacity: ${props => (props.isOpen ? "1" : "0")};
    transform: scaleY(${props => (props.isOpen ? "1" : "0")});
  }

  ${props =>
    props.targetHover &&
    `:hover { border-color: ${props.theme.colors[props.focusBorderColor]}}`}
  ${props =>
    props.targetHover &&
    ":hover > div:last-child{ opacity: 1; transform: scaleY(1);}"}
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  handleClick() {
    const { isOpen, onClick } = this.props;

    if (isOpen) {
      document.addEventListener("mousedown", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("mousedown", this.handleOutsideClick, false);
    }

    onClick();
  }

  handleOutsideClick(e) {
    if (ReactDOM.findDOMNode(this).contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    const {
      children,
      menu,
      isOpen,
      onClick,
      targetHover,
      prefix,
      openSuffix,
      closeSuffix,
      isLoading,
      borderColor,
      focusBorderColor,
      bg,
      focusBg,
      ...rest
    } = this.props;
    return (
      <BaseDropdown
        ref={node => (this.node = node)}
        onClick={
          !isLoading ? (targetHover ? null : this.handleClick) : () => {}
        }
        targetHover={targetHover}
        pos="relative"
        isOpen={isOpen}
        borderColor={isOpen ? focusBorderColor : borderColor}
        bg={isOpen ? focusBg : bg}
        {...rest}
      >
        {prefix}
        {children}
        {isLoading ? (
          <Icon name="Loading" color="gray600" size="18px" />
        ) : isOpen ? (
          openSuffix
        ) : (
          closeSuffix
        )}
        {menu}
      </BaseDropdown>
    );
  }
}

Dropdown.defaultProps = {
  tag: "div",
  d: "flex",
  align: "center",
  textColor: "medium",
  textWeight: "500",
  justify: "space-between",
  p: { x: "0.75rem" },
  h: "2.5rem",
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  w: "100%",
  bg: "white",
  focusBg: "gray100",
  focusBorderColor: "gray800",
  cursor: "pointer",
  onClick: () => {},
  openSuffix: (
    <Icon name="UpArrow" size="18px" m={{ l: "1rem" }} color="medium" />
  ),
  closeSuffix: (
    <Icon name="DownArrow" size="18px" m={{ l: "1rem" }} color="medium" />
  )
};

const findDropdownDir = e => {
  switch (e) {
    case "topright":
      return "transform-origin: 100% 100%; bottom: calc(100% + 2px); right: 0;";
      break;
    case "topleft":
      return "transform-origin: 0 100%; bottom: calc(100% + 2px); left: 0;";
      break;
    case "bottomright":
      return "transform-origin: 50% 0; top: calc(100% + 2px); right: 0;";
      break;
    case "righttop":
      return "transform-origin: 0 0; top: 0; left: calc(100% + 2px);";
      break;
    case "lefttop":
      return "transform-origin: 0 0; top: 0; right: calc(100% + 2px);";
      break;
    default:
      return "transform-origin: 50% 0; top: calc(100% + 2px); left: 0;";
  }
};

export default withTheme(Dropdown);
