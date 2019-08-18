import React, { useState } from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../../core/ThemeContext";
import computeIconStyle from "./Icon.style";
import { iconPaths } from "./iconPaths";

const Icon = React.forwardRef((props, ref) => {
  const [hovered, setHover] = useState(0);
  return (
    <ThemeContext.Consumer>
      {value => {
        const IconName = iconPaths[props.name];
        const output = computeIconStyle(props, value);
        return (
          <BasicIcon
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(0)}
            ref={ref}
            viewBox="0 0 24 24"
            {...output[0]}
            $styleArray={output[1]}
          >
            <IconName
              color={
                value.colors[
                  hovered ? props.hoverColor || props.color : props.color
                ] || props.color
              }
            />
          </BasicIcon>
        );
      }}
    </ThemeContext.Consumer>
  );
});

const BasicIcon = styled("svg", props => {
  return {
    ...props.$styleArray
  };
});

Icon.defaultProps = {
  size: "1.5rem",
  color: "black"
};

export default Icon;
