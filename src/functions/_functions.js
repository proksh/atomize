import { css } from "styled-components";
import { themeVars } from "../constants/_variables";

const findDirection = (key, i) => {
  if (typeof (i.x || i.y || i.b || i.t || i.l || i.r) === "undefined") {
    return makeResponsive(`${key}`, i);
  } else {
    return css`
      ${typeof i.x != "undefined" &&
        makeResponsive(`${key}-left`, i.x).concat(
          makeResponsive(`${key}-right`, i.x)
        )}
      ${typeof i.y != "undefined" &&
        makeResponsive(`${key}-top`, i.y).concat(
          makeResponsive(`${key}-bottom`, i.y)
        )}
        ${typeof i.t != "undefined" && makeResponsive(`${key}-top`, i.t)}
        ${typeof i.l != "undefined" && makeResponsive(`${key}-left`, i.l)}
        ${typeof i.r != "undefined" && makeResponsive(`${key}-right`, i.r)}
        ${typeof i.b != "undefined" && makeResponsive(`${key}-bottom`, i.b)}
    `;
  }
};

const makeResponsive = (key, i) => {
  return css`
    ${key}: ${typeof i === "string" ? i : i.xs || null};

    ${i.sm &&
      `@media (min-width: 576px) {
        ${key}: ${i.sm};
      }`}

    ${i.md &&
      `@media (min-width: 768px) {
        ${key}: ${i.md};
      }`}

    ${i.lg &&
      `@media (min-width: 992px) {
        ${key}: ${i.lg};
      }`}

    ${i.xl &&
      `@media (min-width: 1200px) {
        ${key}: ${i.xl};
      }`}
  `;
};

const findRoundedDirection = (i, themeRadius) => {
  return css`
    ${typeof (i.b || i.t || i.l || i.r || i.tl || i.tr || i.bl || i.br) ===
      "undefined" && makeResponsive("border-radius", themeRadius[i])}
    ${typeof i.l != "undefined" &&
      makeResponsive(`border-top-left-radius`, themeRadius[i.l]).concat(
        makeResponsive(`border-bottom-left-radius`, themeRadius[i.l])
      )}
      ${typeof i.r != "undefined" &&
        makeResponsive(`border-top-right-radius`, themeRadius[i.r]).concat(
          makeResponsive(`border-bottom-right-radius`, themeRadius[i.r])
        )}
        ${typeof i.t != "undefined" &&
          makeResponsive(`border-top-left-radius`, themeRadius[i.t]).concat(
            makeResponsive(`border-top-right-radius`, themeRadius[i.t])
          )}
          ${typeof i.b != "undefined" &&
            makeResponsive(
              `border-bottom-left-radius`,
              themeRadius[i.b]
            ).concat(
              makeResponsive(`border-bottom-right-radius`, themeRadius[i.b])
            )}
            ${typeof i.tl != "undefined" &&
              makeResponsive(`border-top-left-radius`, themeRadius[i.tl])}
              ${typeof i.tr != "undefined" &&
                makeResponsive(`border-top-right-radius`, themeRadius[i.tr])}
              ${typeof i.bl != "undefined" &&
                makeResponsive(`border-bottom-left-radius`, themeRadius[i.bl])}
              ${typeof i.br != "undefined" &&
                makeResponsive(`border-bottom-right-radius`, themeRadius[i.br])}
  `;
};

const makeResponsiveFontSize = (i, textSize) => {
  return css`
  ${
    typeof i === "string"
      ? `font-size: ${textSize.size[i]};line-height:${textSize.height[i]};`
      : i.xs &&
        `font-size: ${textSize.size[i.xs]};line-height:${
          textSize.height[i.xs]
        };`
  }

    ${i.sm &&
      `@media (min-width: 576px) {
        font-size: ${textSize.size[i.sm]};line-height:${textSize.height[i.sm]};
      }`}

    ${i.md &&
      `@media (min-width: 768px) {
        font-size: ${textSize.size[i.md]};line-height:${textSize.height[i.md]};
      }`}

    ${i.lg &&
      `@media (min-width: 992px) {
        font-size: ${textSize.size[i.lg]};line-height:${textSize.height[i.lg]};
      }`}

    ${i.xl &&
      `@media (min-width: 1200px) {
        font-size: ${textSize.size[i.xl]};line-height:${textSize.height[i.xl]};
      }`}
  `;
};

const makeResponsiveShadow = (i, themeShadow) => {
  return css`
  ${
    typeof i === "string" || typeof i === "number"
      ? `box-Shadow: ${themeShadow[i]};`
      : i.xs && `box-Shadow: ${themeShadow[i.xs]};`
  }

    ${i.sm &&
      `@media (min-width: 576px) {
        box-Shadow: ${themeShadow[i.sm]}};
      }`}

    ${i.md &&
      `@media (min-width: 768px) {
        box-Shadow: ${themeShadow[i.md]}};
      }`}

    ${i.lg &&
      `@media (min-width: 992px) {
        box-Shadow: ${themeShadow[i.lg]}};
      }`}

    ${i.xl &&
      `@media (min-width: 1200px) {
        box-Shadow: ${themeShadow[i.xl]}};
      }`}
  `;
};

export const functions = {
  findDirection,
  makeResponsive,
  findRoundedDirection,
  makeResponsiveFontSize,
  makeResponsiveShadow
};
