import makeResponsive from "../../style-functions/makeResponsive";
import findDirection from "../../style-functions/findDirection";
import arrayKeyMapToObject from "../../style-functions/arrayKeyMapToObject";
import findRoundedDirection from "../../style-functions/findRoundedDirection";
import findBorder from "../../style-functions/findBorder";

const computeTextStyle = (props, context) => {
  const {
    d,
    pos,
    top,
    bottom,
    left,
    right,
    h,
    maxH,
    minH,
    justify,
    align,
    flexDir,
    flexGrow,
    flexWrap,
    order,
    rounded,
    border,
    borderColor,
    m,
    p,
    bg,
    textColor,
    textWeight,
    textAlign,
    textTransform,
    textDecor,
    textSize,
    transition,
    w,
    maxW,
    minW,
    fontFamily,
    opacity,
    hoverBg,
    hoverBorderColor,
    hoverTextColor,
    tag,
    theme,
    cursor,
    transform,
    transformOrigin,
    shadow,
    zIndex,
    overflow,
    hoverShadow,
    ...rest
  } = props;

  const style = [
    findRoundedDirection(rounded, context.rounded),
    findDirection(m, "margin"),
    findDirection(p, "padding"),
    makeResponsive(d, "display"),
    makeResponsive(pos, "position"),
    makeResponsive(top, "top"),
    makeResponsive(bottom, "bottom"),
    makeResponsive(left, "left"),
    makeResponsive(right, "right"),
    makeResponsive(justify, "justify-content"),
    makeResponsive(align, "align-items"),
    makeResponsive(flexDir, "flex-direction"),
    makeResponsive(flexGrow, "flex"),
    makeResponsive(flexWrap, "flex-wrap"),
    makeResponsive(order, "order"),
    makeResponsive(h, "height"),
    makeResponsive(maxH, "max-height"),
    makeResponsive(minH, "min-height"),
    makeResponsive(w, "width"),
    makeResponsive(minW, "min-width"),
    makeResponsive(maxW, "max-width"),
    makeResponsive(cursor, "cursor"),
    findBorder(border, borderColor, context.colors),
    makeResponsive(bg, "background", context.colors),
    makeResponsive(textColor, "color", context.colors),
    makeResponsive(textWeight, "font-weight"),
    makeResponsive(fontFamily, "font-family", context.fontFamily),
    makeResponsive(textAlign, "text-align"),
    makeResponsive(textTransform, "text-transform"),
    makeResponsive(textDecor, "text-decoration"),
    makeResponsive(transform, "transform"),
    makeResponsive(transformOrigin, "transform-origin"),
    makeResponsive(shadow, "box-shadow", context.shadows),
    makeResponsive(transition, "transition"),
    makeResponsive(textSize, "font-size", context.textSize.size),
    makeResponsive(textSize, "line-height", context.textSize.height),
    makeResponsive(zIndex, "z-index"),
    makeResponsive(overflow, "overflow"),
    makeResponsive(opacity, "opacity"),
    {
      ":hover": {
        ...makeResponsive(hoverBg, "background", context.colors),
        ...makeResponsive(hoverTextColor, "color", context.colors),
        ...makeResponsive(hoverBorderColor, "border-color", context.colors),
        ...makeResponsive(hoverShadow, "box-shadow", context.shadows)
      },
      ":visited": {
        ...makeResponsive(textColor, "color", context.colors)
      }
    }
  ];

  return [rest, arrayKeyMapToObject(style)];
};

export default computeTextStyle;
