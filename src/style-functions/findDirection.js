import makeResponsive from "./makeResponsive";
import arrayKeyMapToObject from "./arrayKeyMapToObject";

const findDirection = (value, property, themeValues = {}) => {
  if (!value) {
    return;
  }

  let style = [];

  if (
    typeof (value.x || value.y || value.b || value.t || value.l || value.r) ===
    "undefined"
  ) {
    style.push(makeResponsive(value, property, themeValues));
  } else {
    // If x direction exist
    if (value.x != "undefined") {
      style.push(makeResponsive(value.x, `${property}-left`, themeValues));
      style.push(makeResponsive(value.x, `${property}-right`, themeValues));
    }
    // If y direction exist
    if (value.y != "undefined") {
      style.push(makeResponsive(value.y, `${property}-top`, themeValues));
      style.push(makeResponsive(value.y, `${property}-bottom`, themeValues));
    }
    // If t direction exist
    if (value.t != "undefined") {
      style.push(makeResponsive(value.t, `${property}-top`, themeValues));
    }
    // If l direction exist
    if (value.l != "undefined") {
      style.push(makeResponsive(value.l, `${property}-left`, themeValues));
    }
    // If r direction exist
    if (value.r != "undefined") {
      style.push(makeResponsive(value.r, `${property}-right`, themeValues));
    }
    // If b direction exist
    if (value.b != "undefined") {
      style.push(makeResponsive(value.b, `${property}-bottom`, themeValues));
    }
  }

  return arrayKeyMapToObject(style);
};

export default findDirection;
