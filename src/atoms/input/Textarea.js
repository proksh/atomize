import React from "react";
import Input from "./Input";
import Icon from "../icon/Icon";

const Textarea = ({ isLoading, suffix, ...rest }) => {
  return (
    <Input
      tag="textarea"
      suffix={
        isLoading ? (
          <Icon
            name={"Loading"}
            pos="absolute"
            top="0.75rem"
            right="0.75rem"
            size="16px"
            color="gray600"
          />
        ) : (
          suffix
        )
      }
      {...rest}
    />
  );
};

Textarea.defaultProps = {
  d: "flex",
  p: { x: "0.75rem", y: "0.5rem" },
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  h: "6.5rem",
  w: "100%",
  minW: "100%",
  bg: "white",
  textColor: "dark",
  textWeight: "500",
  focusBorderColor: "gray700"
};

export default Textarea;
