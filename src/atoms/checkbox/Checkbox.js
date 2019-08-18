import React from "react";
import { styled } from "styletron-react";
import Icon from "../icon/Icon";

const Checkbox = React.forwardRef((props, ref) => {
  const {
    disabled,
    undetermine,
    m,
    size,
    activeColor,
    inactiveColor,
    isLoading,
    checked,
    ...rest
  } = props;

  return (
    <>
      <CheckboxInput
        type="checkbox"
        disabled={disabled}
        undetermine={undetermine}
        checked={checked}
        ref={ref}
        {...rest}
      />
      {!undetermine &&
        !disabled &&
        (checked ? (
          <Icon
            m={m}
            size={size}
            color={activeColor}
            name={isLoading ? "Loading" : "CBChecked"}
          />
        ) : (
          <Icon
            m={m}
            size={size}
            color={inactiveColor}
            name={isLoading ? "Loading" : "CBUnchecked"}
          />
        ))}
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
});

const CheckboxInput = styled("input", {
  display: "none"
});

Checkbox.defaultProps = {
  cursor: "pointer",
  m: { r: "0.5rem" },
  color: "black",
  size: "20px",
  inactiveColor: "gray500",
  activeColor: "info700"
};

export default Checkbox;
