import DEVICEQUERRY from "../../style-functions/deviceQuerry";
import mergeObjects from "../../style-functions/mergeObjects";

const computeColStyle = (props, context) => {
  const { p, m, size, offset, ...rest } = props;

  const offsetObject = {};
  const sizeObject = {};

  // Offset Present
  if (offset) {
    // Give style directly if not an object
    if (typeof offset === "string" || typeof offset === "number") {
      offsetObject["margin-left"] = `${(100 * parseInt(offset)) /
        context.grid.colCount}%`;
    }

    // Create an array for responsive value
    else if (typeof offset === "object") {
      Object.keys(offset).map(key => {
        if (key === "xs") {
          offsetObject["margin-left"] = `${(100 * parseInt(offset[key])) /
            context.grid.colCount}%`;
        } else {
          offsetObject[DEVICEQUERRY[key]] = {
            "margin-left": `${(100 * parseInt(offset[key])) /
              context.grid.colCount}%`
          };
        }
      });
    }
  }

  // Size Present
  if (size) {
    if (typeof size === "string" || typeof size === "number") {
      sizeObject["flex"] = `0 1 ${(100 * parseInt(size)) /
        context.grid.colCount}%`;
      sizeObject["max-width"] = `${(100 * parseInt(size)) /
        context.grid.colCount}%`;
    }

    // Create an array for responsive value
    else if (typeof size === "object") {
      Object.keys(size).map(key => {
        if (key === "xs") {
          sizeObject["flex"] = `0 1 ${(100 * parseInt(size[key])) /
            context.grid.colCount}%`;
          sizeObject["max-width"] = `${(100 * parseInt(size[key])) /
            context.grid.colCount}%`;
        } else if (size[key]) {
          sizeObject[DEVICEQUERRY[key]] = {
            flex: `0 1 ${(100 * parseInt(size[key])) / context.grid.colCount}%`,
            "max-width": `${(100 * parseInt(size[key])) /
              context.grid.colCount}%`
          };
        }
      });
    }
  }

  // If size for mobile is not defined
  if (
    !(typeof size === "string" || typeof size === "number" || (size && size.xs))
  ) {
    sizeObject["flex-basis"] = "0";
    sizeObject["flex-grow"] = "1";
    sizeObject["max-width"] = "100%";
  }

  return [rest, mergeObjects(sizeObject, offsetObject)];
};

export default computeColStyle;
