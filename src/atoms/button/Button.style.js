import makeResponsive from "../../style-functions/makeResponsive";
import findDirection from "../../style-functions/findDirection";
import arrayKeyMapToObject from "../../style-functions/arrayKeyMapToObject";
import findRoundedDirection from "../../style-functions/findRoundedDirection";
import findBorder from "../../style-functions/findBorder";

const computeButtonStyle = (props, context) => {
  const {
    d,
    pos,
    top,
    bottom,
    left,
    right,
    justify,
    align,
    flexDir,
    flexGrow,
    flexWrap,
    order,
    m,
    p,
    rounded,
    border,
    borderColor,
    h,
    maxH,
    minH,
    w,
    minW,
    maxW,
    cursor,
    bg,
    bgImg,
    bgSize,
    bgRepeat,
    bgPos,
    textSize,
    textWeight,
    textAlign,
    textTransform,
    fontFamily,
    shadow,
    transition,
    transform,
    transformOrigin,
    zIndex,
    overflow,
    opacity,
    hoverBg,
    hoverTextColor,
    hoverBorderColor,
    hoverShadow,
    focusBorderColor,
    isOpen,
    hover,
    offset,
    size,
    targetHover,
    disableColor,
    disableBorderColor,
    disableShadow,
    disableBg,
    ...rest
  } = props;

  const style = [
    { boxSizing: "border-box" },
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
    bgImg ? { backgroundImage: `url(${bgImg}` } : undefined,
    makeResponsive(bgSize, "background-size"),
    makeResponsive(bgRepeat, "background-repeat"),
    makeResponsive(bgPos, "background-position"),
    makeResponsive(bgRepeat, "background-repeat"),
    makeResponsive(bgRepeat, "background-repeat"),
    makeResponsive(props.textColor, "color", context.colors),
    makeResponsive(textWeight, "font-weight"),
    makeResponsive(textAlign, "text-align"),
    makeResponsive(textTransform, "text-transform"),
    makeResponsive(fontFamily, "font-family", context.fontFamily),
    makeResponsive(transform, "transform"),
    makeResponsive(transformOrigin, "transform-origin"),
    makeResponsive(shadow, "box-shadow", context.shadows),
    makeResponsive(transition, "transition", context.transition),
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
      }
    },
    {
      ":disabled": {
        color: context.colors[disableColor],
        borderColor: context.colors[disableBorderColor],
        cursor: "not-allowed",
        boxShadow: context.shadows[disableShadow],
        background: context.colors[disableBg]
      }
    }
  ];

  return [rest, arrayKeyMapToObject(style)];
};

export default computeButtonStyle;
