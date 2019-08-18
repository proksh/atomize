import React from "react";
import Div from "../div/Div";
import Icon from "../icon/Icon";

const Switch = React.forwardRef((props, ref) => {
  const {
    checked,
    m,
    activeColor,
    inactiveColor,
    activeShadow,
    inactiveShadow,
    isLoading,
    ...rest
  } = props;

  return (
    <Div
      m={m}
      d="flex"
      align="center"
      justify="center"
      shadow={checked ? activeShadow : inactiveShadow}
      bg={checked ? activeColor : inactiveColor}
      p={{ y: "4px", x: "13px" }}
      rounded="circle"
      transition
      {...rest}
    >
      {isLoading ? (
        <Icon name="Loading" size="20px" color="white" />
      ) : (
        <Div
          transform={checked ? "translateX(50%)" : "translateX(-50%)"}
          transition
          h="16px"
          w="16px"
          shadow="4"
          bg="white"
          rounded="circle"
        />
      )}
    </Div>
  );
});

Switch.defaultProps = {
  cursor: "pointer",
  m: { r: "1rem" },
  activeColor: "info700",
  inactiveColor: "gray500",
  activeShadow: "4",
  inactiveShadow: "0"
};

export default Switch;
