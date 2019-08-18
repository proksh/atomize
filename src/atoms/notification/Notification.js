import React from "react";
import { Transition } from "react-transition-group";
import Div from "../div/Div";

/**
 * Duration for the transition
 */
const duration = 300;

/**
 * Default Style for SideDrawerContent
 */
const defaultNotifationStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0
};

/**
 * Trasition Styles for SideDrawerContent
 */
const transitionNotifationStyles = {
  entering: { opacity: 0, transform: "translateY(-100%)" },
  entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(100%)" },
  exited: { opacity: 0, transform: "translateY(-100%)" }
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.setTimer = this.setTimer.bind(this);
  }

  /**
   * SetTimerForClosing
   */
  setTimer() {
    const { onClose } = this.props;

    setTimeout(() => {
      onClose();
    }, 2000);
  }

  render() {
    const { children, isOpen, onClose, prefix, suffix, ...rest } = this.props;

    return (
      <Transition
        in={isOpen}
        timeout={duration}
        onEntering={this.setTimer}
        unmountOnExit
      >
        {state => (
          <Div
            style={{
              ...defaultNotifationStyle,
              ...transitionNotifationStyles[state]
            }}
            tabIndex="-1"
            {...rest}
          >
            {prefix}
            <Div flexGrow="1">{children}</Div>
            {suffix}
          </Div>
        )}
      </Transition>
    );
  }
}

Notification.defaultProps = {
  pos: "fixed",
  top: "2rem",
  right: "2rem",
  d: "flex",
  align: "center",
  bg: "gray900",
  rounded: "md",
  p: { x: "16px", y: "16px" },
  textColor: "white",
  iconsSize: "18px",
  iconSize: "20px",
  textWeight: "600",
  w: "20rem",
  zIndex: "1050",
  shadow: "3"
};

export default Notification;
