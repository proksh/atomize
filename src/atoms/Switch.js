import React from "react";
import styled from "styled-components";

import Div from "./Div";
import Icon from "./Icon";

const CheckboxInput = styled.input`
  display: none;
`;

const Switch = ({
  checked,
  m,
  activeColor,
  inactiveColor,
  activeShadow,
  inactiveShadow,
  isLoading,
  ...rest
}) => {
  return (
    <>
      <CheckboxInput type="checkbox" {...rest} />
      <Div
        m={m}
        d="flex"
        align="center"
        justify="center"
        shadow={checked ? activeShadow : inactiveShadow}
        bg={checked ? activeColor : inactiveColor}
        p={{ y: "4px", x: "13px" }}
        rounded="circle"
        style={{ transition: "transform 0.1s ease-in-out" }}
      >
        {isLoading ? (
          <Icon name="Loading" size="20px" color="white" />
        ) : (
          <Div
            style={{
              transition: "transform 0.1s ease-in-out",
              transform: checked ? "translateX(50%)" : "translateX(-50%)"
            }}
            h="16px"
            w="16px"
            shadow="4"
            bg="white"
            rounded="circle"
          />
        )}
      </Div>
    </>
  );
};

Switch.defaultProps = {
  cursor: "pointer",
  m: { r: "1rem" },
  activeColor: "info700",
  inactiveColor: "gray500",
  activeShadow: "4",
  inactiveShadow: "0"
};

export default Switch;
