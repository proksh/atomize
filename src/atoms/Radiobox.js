import React from "react";
import styled from "styled-components";

import Icon from "./Icon";

const RadioboxInput = styled.input`
  display: none;

  ~ div {
    svg:nth-child(1) {
      display: none;
    }
    svg:nth-child(2) {
      display: block;
    }
  }

  &:checked ~ div {
    svg:nth-child(1) {
      display: block;
    }
    svg:nth-child(2) {
      display: none;
    }
  }
`;

const Radiobox = ({
  m,
  size,
  activeColor,
  inactiveColor,
  isLoading,
  value,
  selectedValue,
  checked,
  ...rest
}) => {
  return (
    <>
      <RadioboxInput
        type="radio"
        {...rest}
        checked={value ? value === selectedValue : checked}
      />
      <div>
        <Icon
          m={m}
          name={isLoading ? "Loading" : "RBChecked"}
          color={activeColor}
          size={size}
        />
        <Icon
          m={m}
          name={isLoading ? "Loading" : "RBUnchecked"}
          color={inactiveColor}
          size={size}
        />
      </div>
    </>
  );
};

Radiobox.defaultProps = {
  cursor: "pointer",
  m: { r: "0.5rem" },
  size: "20px",
  inactiveColor: "gray500",
  activeColor: "info700"
};

export default Radiobox;
