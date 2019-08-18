import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import Div from "../div/Div";
import Icon from "../icon/Icon";
import findDropdownDir from "./DropdownMenu.style";

/**
 * Duration for the transition
 */
const duration = 300;

/**
 * Default Style for DropdownMenu
 */
const defaultMenuStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: "scaleY(1)"
};

/**
 * Trasition Styles for DropdownMenu
 */
const menuTransitionStyles = {
  entering: { opacity: 0, transform: "scaleY(0)" },
  entered: { opacity: 1, transform: "scaleY(1)" },
  exiting: { opacity: 0, transform: "scaleY(0)" },
  exited: { opacity: 0, transform: "scaleY(0)" }
};

/**
 * Styling the direction of dropdown menu
 */
const BaseDropdownMenu = styled(Div, props => {
  return { ...props.$style };
});

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  removeEvents() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  handleClick() {
    const { isOpen, onClick, isLoading } = this.props;

    if (isLoading) {
      return;
    }

    if (!onClick) {
      return;
    }

    if (!isOpen) {
      document.addEventListener("mousedown", this.handleOutsideClick, false);
    } else {
      this.removeEvents;
    }

    onClick();
  }

  handleOutsideClick(e) {
    if (ReactDOM.findDOMNode(this).contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  onHover(value) {
    const { targetHover, isLoading } = this.props;

    if (isLoading) {
      return;
    }

    if (!targetHover) {
      return;
    }

    this.setState({ isHovered: value });
  }

  onKeyDown(e) {
    if (e.keyCode != 13) {
      return;
    }

    const { onClick, targetHover } = this.props;

    if (onClick) {
      this.handleClick();
    } else if (targetHover) {
      this.onHover();
    }
  }

  render() {
    const {
      w,
      minW,
      maxW,
      m,
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
      direction,
      zIndex,
      ...rest
    } = this.props;

    const { isHovered } = this.state;

    const menustyle = findDropdownDir(direction);

    const showDropdown = isOpen || isHovered;

    return (
      <Div
        w={w}
        minW={minW}
        maxW={maxW}
        m={m}
        onMouseEnter={() => {
          this.onHover(true);
        }}
        onMouseLeave={() => {
          this.onHover(false);
        }}
        zIndex={zIndex}
        pos="relative"
      >
        <Div
          tag="button"
          tabIndex="0"
          w="100%"
          ref={node => (this.node = node)}
          onClick={this.handleClick}
          onKeyDown={this.onKeyDown}
          borderColor={showDropdown ? focusBorderColor : borderColor}
          bg={showDropdown ? focusBg : bg}
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
        </Div>
        <Transition
          in={showDropdown}
          timeout={duration}
          onExiting={this.removeEvents}
          unmountOnExit
        >
          {state => (
            <BaseDropdownMenu
              $style={menustyle}
              zIndex="10"
              tabIndex="-1"
              style={{
                ...defaultMenuStyle,
                ...menuTransitionStyles[state]
              }}
              transition
              pos="absolute"
              shadow="4"
              minW="100%"
              rounded="md"
              bg="white"
            >
              {menu}
            </BaseDropdownMenu>
          )}
        </Transition>
      </Div>
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

Dropdown.contextType = ThemeContext;

export default Dropdown;
