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
  entered: { opacity: 0.4 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

/**
 * Default Style for ModalContent
 */
const defaultModalContentStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  overflowY: "auto",
  overflowX: "hidden"
};

/**
 * Trasition Styles for ModalContent
 */
const transitionModalContentStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

class Modal extends Component {
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
    const { children, isOpen, onClose, align, ...rest } = this.props;

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
              pos="fixed"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="black"
              opacity="0.4"
              zIndex="1000"
            />
            <Div
              style={{
                ...defaultModalContentStyle,
                ...transitionModalContentStyles[state]
              }}
              onClick={onClose}
              tabIndex="-1"
              pos="fixed"
              top="0"
              left="0"
              right="0"
              h="100vh"
              d="flex"
              align={align}
              justify="center"
              zIndex="1001"
              cursor="pointer"
            >
              <Div
                onClick={e => {
                  e.stopPropagation();
                }}
                bg="white"
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

Modal.defaultProps = {
  m: { y: { xs: "1rem", lg: "2rem" }, x: { xs: "1rem", lg: "auto" } },
  p: "2rem",
  maxW: "32rem",
  w: "100%",
  pos: "relative",
  shadow: "4",
  cursor: "default",
  align: "start",
  onClose: () => {}
};

export default Modal;
