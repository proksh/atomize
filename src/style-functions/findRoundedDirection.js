import makeResponsive from "./makeResponsive";
import arrayKeyMapToObject from "./arrayKeyMapToObject";

const findRoundedDirection = (value, themeValues = {}) => {
  if (!value) {
    return;
  }

  let style = [];

  if (
    typeof (
      value.b ||
      value.t ||
      value.l ||
      value.r ||
      value.tl ||
      value.tr ||
      value.bl ||
      value.br
    ) === "undefined"
  ) {
    style.push(makeResponsive(value, "border-radius", themeValues));
  } else {
    // If l direction exist
    if (value.l != "undefined") {
      style.push(
        makeResponsive(value.l, "border-top-left-radius", themeValues)
      );
      style.push(
        makeResponsive(value.l, "border-bottom-left-radius", themeValues)
      );
    }

    // If r direction exist
    if (value.r != "undefined") {
      style.push(
        makeResponsive(value.r, "border-top-right-radius", themeValues)
      );
      style.push(
        makeResponsive(value.r, "border-bottom-right-radius", themeValues)
      );
    }

    // If t direction exist
    if (value.t != "undefined") {
      style.push(
        makeResponsive(value.t, "border-top-left-radius", themeValues)
      );
      style.push(
        makeResponsive(value.t, "border-top-right-radius", themeValues)
      );
    }

    // If b direction exist
    if (value.b != "undefined") {
      style.push(
        makeResponsive(value.b, "border-bottom-left-radius", themeValues)
      );
      style.push(
        makeResponsive(value.b, "border-bottom-right-radius", themeValues)
      );
    }

    // If tl direction exist
    if (value.tl != "undefined") {
      style.push(
        makeResponsive(value.tl, "border-top-left-radius", themeValues)
      );
    }

    // If tr direction exist
    if (value.tr != "undefined") {
      style.push(
        makeResponsive(value.tr, "border-top-right-radius", themeValues)
      );
    }

    // If bl direction exist
    if (value.bl != "undefined") {
      style.push(
        makeResponsive(value.bl, "border-bottom-left-radius", themeValues)
      );
    }

    // If br direction exist
    if (value.br != "undefined") {
      style.push(
        makeResponsive(value.br, "border-bottom-right-radius", themeValues)
      );
    }
  }

  return arrayKeyMapToObject(style);
};

export default findRoundedDirection;
