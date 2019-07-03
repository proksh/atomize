import React from "react";
import styled from "styled-components";

import Icon from "./Icon";

const CheckboxInput = styled.input`
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

const Checkbox = ({
  disabled,
  undetermine,
  m,
  size,
  activeColor,
  inactiveColor,
  isLoading,
  ...rest
}) => {
  return (
    <>
      <CheckboxInput
        type="checkbox"
        disabled={disabled}
        undetermine={undetermine}
        {...rest}
      />
      {!undetermine && !disabled && (
        <div>
          <Icon
            m={m}
            size={size}
            color={activeColor}
            name={isLoading ? "Loading" : "CBChecked"}
          />
          <Icon
            m={m}
            size={size}
            color={inactiveColor}
            name={isLoading ? "Loading" : "CBUnchecked"}
          />
        </div>
      )}
      {undetermine && (
        <Icon
          m={m}
          size={size}
          color={activeColor}
          name={isLoading ? "Loading" : "CBIndetermine"}
        />
      )}
      {disabled && (
        <Icon
          m={m}
          size={size}
          color={inactiveColor}
          name={isLoading ? "Loading" : "CBDisabled"}
        />
      )}
    </>
  );
};

Checkbox.defaultProps = {
  cursor: "pointer",
  m: { r: "0.5rem" },
  color: "black",
  size: "20px",
  inactiveColor: "gray500",
  activeColor: "info700"
};

export default Checkbox;
