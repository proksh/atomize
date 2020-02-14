// import makeResponsive from "./makeResponsive";
import DEVICEQUERRY from "./deviceQuerry";

import arrayKeyMapToObject from "./arrayKeyMapToObject";

const findBorder = (border, borderColor, themeColors) => {
  if (!border) {
    return;
  }

  const property = "border";

  let style = [];

  if (
    typeof (
      border.x ||
      border.y ||
      border.b ||
      border.t ||
      border.l ||
      border.r
    ) === "undefined"
  ) {
    style.push(
      makeResponsiveBorder(border, property, themeColors, borderColor)
    );
  } else {
    // If x direction exist
    if (border.x != "undefined") {
      style.push(
        makeResponsiveBorder(
          border.x,
          `${property}-left`,
          themeColors,
          borderColor
        )
      );
      style.push(
        makeResponsiveBorder(
          border.x,
          `${property}-right`,
          themeColors,
          borderColor
        )
      );
    }
    // If y direction exist
    if (border.y != "undefined") {
      style.push(
        makeResponsiveBorder(
          border.y,
          `${property}-top`,
          themeColors,
          borderColor
        )
      );
      style.push(
        makeResponsiveBorder(
          border.y,
          `${property}-bottom`,
          themeColors,
          borderColor
        )
      );
    }
    // If t direction exist
    if (border.t != "undefined") {
      style.push(
        makeResponsiveBorder(
          border.t,
          `${property}-top`,
          themeColors,
          borderColor
        )
      );
    }
    // If l direction exist
    if (border.l != "undefined") {
      style.push(
        makeResponsiveBorder(
          border.l,
          `${property}-left`,
          themeColors,
          borderColor
        )
      );
    }
    // If r direction exist
    if (border.r != "undefined") {
      style.push(
        makeResponsiveBorder(
          border.r,
          `${property}-right`,
          themeColors,
          borderColor
        )
      );
    }
    // If b direction exist
    if (border.b != "undefined") {
      style.push(
        makeResponsiveBorder(
          border.b,
          `${property}-bottom`,
          themeColors,
          borderColor
        )
      );
    }
  }

  return arrayKeyMapToObject(style);
};

export default findBorder;

const makeResponsiveBorder = (border, property, themeColors, borderColor) => {
  let style = {};
  if (!border) {
    return;
  }

  const defaultborderColor =
    (typeof borderColor === "string" &&
      borderColor &&
      (themeColors[borderColor] || borderColor)) ||
    (borderColor &&
      borderColor.xs &&
      (themeColors[borderColor.xs] || borderColor.xs)) ||
    "#000000";

  // Give style directly if not an object
  if (typeof border === "string") {
    if (border === "none") {
      style[property] = border;
    } else {
      style[property] = `${border} ${themeColors[borderColor] ||
        borderColor ||
        defaultborderColor}`;
    }
  }

  // Create an array for responsive border
  else if (typeof border === "object") {
    Object.keys(border).map(key => {
      if (key === "xs") {
        if (border[key] === "none") {
          style[property] = border[key];
        } else {
          style[property] = `${border[key]} ${themeColors[borderColor[key]] ||
            borderColor[key] ||
            defaultborderColor}`;
        }
      } else {
        if (border[key] === "none") {
          style[DEVICEQUERRY[key]] = {
            [property]: border[key]
          };
        } else {
          style[DEVICEQUERRY[key]] = {
            [property]: `${border[key]} ${themeColors[borderColor[key]] ||
              borderColor[key] ||
              defaultborderColor}`
          };
        }
      }
    });
  }

  return style;
};
