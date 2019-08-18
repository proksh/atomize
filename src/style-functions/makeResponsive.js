import DEVICEQUERRY from "./deviceQuerry";

const makeResponsive = (value, property, themeValues = {}) => {
  let style = {};
  if (!value) {
    return;
  }

  // Give style directly if not an object
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    style[`${property}`] = themeValues[`${value}`] || `${value}`;
  }

  // Create an array for responsive value
  else if (typeof value === "object") {
    Object.keys(value).map(key => {
      if (key === "xs") {
        style[property] = themeValues[`${value[key]}`] || `${value[key]}`;
      } else {
        style[DEVICEQUERRY[key]] = {
          [property]: themeValues[`${value[key]}`] || `${value[key]}`
        };
      }
    });
  }

  return style;
};

export default makeResponsive;
