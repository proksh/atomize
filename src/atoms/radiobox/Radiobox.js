import React from "react";
import { styled } from "styletron-react";
import Icon from "../icon/Icon";

const Radiobox = React.forwardRef((props, ref) => {
  const {
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
      <RadioboxInput type="radio" ref={ref} {...rest} checked={checked} />
      {checked ? (
        <Icon
          m={m}
          name={isLoading ? "Loading" : "RBChecked"}
          color={activeColor}
          size={size}
        />
      ) : (
        <Icon
          m={m}
          name={isLoading ? "Loading" : "RBUnchecked"}
          color={inactiveColor}
          size={size}
        />
      )}
    </>
  );
});

const RadioboxInput = styled("input", {
  display: "none"
});

Radiobox.defaultProps = {
  cursor: "pointer",
  m: { r: "0.5rem" },
  size: "20px",
  inactiveColor: "gray500",
  activeColor: "info700"
};

export default Radiobox;
