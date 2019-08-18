import makeResponsive from "../../style-functions/makeResponsive";
import findDirection from "../../style-functions/findDirection";
import arrayKeyMapToObject from "../../style-functions/arrayKeyMapToObject";

const computeIconStyle = (props, context) => {
  const {
    d,
    size,
    m,
    p,
    pos,
    transform,
    transformOrigin,
    order,
    top,
    bottom,
    left,
    right,
    cursor,
    name,
    color,
    hoverColor,
    zIndex,
    opacity,
    transition,
    ...rest
  } = props;

  const style = [
    { boxSizing: "border-box" },
    findDirection(m, "margin"),
    findDirection(p, "padding"),
    findDirection(size, "height"),
    findDirection(size, "width"),
    findDirection(size, "min-width"),
    findDirection(size, "min-height"),
    makeResponsive(d, "display"),
    makeResponsive(pos, "position"),
    makeResponsive(top, "top"),
    makeResponsive(bottom, "bottom"),
    makeResponsive(left, "left"),
    makeResponsive(right, "right"),
    makeResponsive(order, "order"),
    makeResponsive(cursor, "cursor"),
    makeResponsive(transform, "transform"),
    makeResponsive(transformOrigin, "transform-origin"),
    makeResponsive(zIndex, "z-index"),
    makeResponsive(opacity, "opacity"),
    {
      ":hover": {
        path: {
          ...makeResponsive(transition, "transition", context.transition),
          ...makeResponsive(hoverColor, "fill", context.colors)
        },
        circle: {
          ...makeResponsive(transition, "transition", context.transition),
          ...makeResponsive(hoverColor, "fill", context.colors)
        }
      }
    }
  ];

  return [rest, arrayKeyMapToObject(style)];
};

export default computeIconStyle;
