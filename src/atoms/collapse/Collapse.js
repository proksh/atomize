import React, { Component } from "react";
import { Transition } from "react-transition-group";
import Div from "../div/Div";

export default class Collapse extends Component {
  constructor() {
    super();

    this.state = {
      defaultHeight: 0
    };

    this.innerDiv = React.createRef();
    this.onEntering = this.onEntering.bind(this);
    this.onExiting = this.onExiting.bind(this);
  }

  /**
   * Set State for Height on Enter
   */
  onEntering() {
    this.setState({ defaultHeight: this.innerDiv.current.clientHeight });

    // Start Function if recieved a onEntering Props
    const { onEntering } = this.props;
    if (onEntering) onEntering();
  }

  /**
   * Set State for Height on Exit
   */
  onExiting() {
    this.setState({ defaultHeight: this.innerDiv.current.clientHeight });

    // Start Function if recieved a onExiting Props
    const { onExiting } = this.props;
    if (onExiting) onExiting();
  }

  render() {
    const { defaultHeight } = this.state;
    const { p, children, isOpen, ...rest } = this.props;

    /**
     * Duration for the transition
     */
    const duration = 400;

    /**
     * Default Style for Backlayer
     */
    const defaultStyle = {
      transition: `height ${duration}ms ease-in-out`,
      height: 0,
      opacity: 0
    };

    /**
     * Trasition Styles for Backlayer
     */
    const transitionStyles = {
      entering: { opacity: 0, height: 0 },
      entered: { opacity: 1, height: defaultHeight },
      exiting: { opacity: 0, height: 0 },
      exited: { opacity: 0, height: 0 }
    };

    return (
      <Transition
        in={isOpen}
        timeout={duration}
        onEntering={this.onEntering}
        onExiting={this.onExiting}
      >
        {state => (
          <Div
            {...rest}
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            transition
          >
            <div ref={this.innerDiv}>{children}</div>
          </Div>
        )}
      </Transition>
    );
  }
}

Collapse.defaultProps = {
  m: { y: 0 },
  p: { y: 0 },
  overflow: "hidden"
};
