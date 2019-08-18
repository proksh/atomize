import React, { Component } from "react";
import { Transition } from "react-transition-group";
import Div from "../div/Div";

/**
 * Duration for the transition
 */
const duration = 300;

/**
 * Default Style for Backlayer
 */
const defaultbackLayerStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

/**
 * Trasition Styles for Backlayer
 */
const backLayerTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0.2 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

/**
 * Default Style for SideDrawerContent
 */
const defaultSideDrawerContentStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  overflowY: "auto",
  overflowX: "hidden"
};

/**
 * Trasition Styles for SideDrawerContent
 */
const transitionSideDrawerContentStyles = {
  entering: { opacity: 0, transform: "translateX(100%)" },
  entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(100%)" },
  exited: { opacity: 0, transform: "translateX(100%)" }
};

class SideDrawer extends Component {
  constructor(props) {
    super(props);

    this.disableBodyScroll = this.disableBodyScroll.bind(this);
    this.enableBodyScroll = this.enableBodyScroll.bind(this);
  }
  /**
   * Disable the body scroll when Opened
   */
  disableBodyScroll() {
    document.querySelector("body").style.overflow = "hidden";

    // Start Function if recieved a onEntering Props
    const { onEntering } = this.props;
    if (onEntering) onEntering();
  }

  /**
   * Enable the body scroll when Closed
   */
  enableBodyScroll() {
    document.querySelector("body").style.overflow = "auto";

    // Start Function if recieved a onExiting Props
    const { onExiting } = this.props;
    if (onExiting) onExiting();
  }

  componentWillUnmount() {
    document.querySelector("body").style.overflow = "auto";
  }

  render() {
    const { children, isOpen, onClose, ...rest } = this.props;

    return (
      <Transition
        in={isOpen}
        timeout={duration}
        onEntering={this.disableBodyScroll}
        onExiting={this.enableBodyScroll}
        unmountOnExit
      >
        {state => (
          <>
            <Div
              style={{
                ...defaultbackLayerStyle,
                ...backLayerTransitionStyles[state]
              }}
              tabIndex="-1"
              pos="fixed"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="black"
              opacity="0.2"
              zIndex="1000"
              cursor="pointer"
              onClick={onClose}
            />
            <Div
              style={{
                ...defaultSideDrawerContentStyle,
                ...transitionSideDrawerContentStyles[state]
              }}
              pos="fixed"
              top="0"
              right="0"
              h="100vh"
              d="flex"
              bg="white"
              zIndex="1001"
            >
              <Div
                onClick={e => {
                  e.stopPropagation();
                }}
                {...rest}
                zIndex="1"
              >
                {children}
              </Div>
            </Div>
          </>
        )}
      </Transition>
    );
  }
}

SideDrawer.defaultProps = {
  pos: "relative",
  w: { xs: "100vw", sm: "24rem" },
  bg: "white",
  p: "1.5rem",
  onClose: () => {}
};

export default SideDrawer;
