import React from "react";
import styled, { css } from "styled-components";
import { withTheme } from "../core/theming";

import Div from "./Div";

const takeReqWidth = (i, colCount) => {
  const flexAuto = "flex-basis: 0; flex-grow: 1; max-width: 100%;";

  if (i === undefined) {
    return flexAuto;
  } else {
    return css`
    ${(typeof parseInt(i) === "number" || i.xs) &&
      (i.xs !== undefined || i.xs !== "auto"
        ? `flex: 0 1 ${(100 * (parseInt(i.xs) || parseInt(i))) /
            colCount}%; max-width: ${(100 * (parseInt(i.xs) || parseInt(i))) /
            colCount}%`
        : flexAuto)};
    ${i.sm &&
      `@media (min-width: 576px) {
        ${
          i.sm != "auto"
            ? `max-width: ${(100 * parseInt(i.sm)) /
                colCount}%; flex: 0 0 ${(100 * parseInt(i.sm)) / colCount}%;`
            : flexAuto
        }
        
      }`}
      ${i.md &&
        `@media (min-width: 768px) {
          ${
            i.md != "auto"
              ? `max-width: ${(100 * parseInt(i.md)) /
                  colCount}%; flex: 0 0 ${(100 * parseInt(i.md)) / colCount}%;`
              : flexAuto
          }
          
        }`}
        ${i.lg &&
          `@media (min-width: 992px) {
            ${
              i.lg != "auto"
                ? `max-width: ${(100 * parseInt(i.lg)) /
                    colCount}%; flex: 0 0 ${(100 * parseInt(i.lg)) /
                    colCount}%;`
                : flexAuto
            }
            
          }`}
          ${i.xl &&
            `@media (min-width: 1200px) {
              ${
                i.xl != "auto"
                  ? `max-width: ${(100 * parseInt(i.xl)) /
                      colCount}%; flex: 0 0 ${(100 * parseInt(i.xl)) /
                      colCount}%;`
                  : flexAuto
              }
              
            }`}
  `;
  }
};

const takeReqOffset = (i, colCount) => {
  return css`
    ${(typeof parseInt(i) === "number" || i.xs) &&
      `margin-left: ${(100 * (parseInt(i.xs) || i)) / colCount}%`};
    ${i.sm != null &&
      `@media (min-width: 576px) {margin-left: ${(100 * parseInt(i.sm)) /
        colCount}%}`}
    ${i.md != null &&
      `@media (min-width: 768px) { margin-left: ${(100 * parseInt(i.md)) /
        colCount}%}`}
    ${i.lg != null &&
      `@media (min-width: 992px) {margin-left: ${(100 * parseInt(i.lg)) /
        colCount}%}`}
    ${i.xl != null &&
      `@media (min-width: 1200px) {margin-left: ${(100 * parseInt(i.xl)) /
        colCount}%}`}
  `;
};

const BaseColumn = ({ p, m, theme, size, ...rest }) => {
  return (
    <Div p={{ y: "0", x: `calc(${theme.grid.gutterWidth}/2)` }} {...rest} />
  );
};

const Col = styled(BaseColumn)`
  ${props => takeReqWidth(props.size, props.theme.grid.colCount)};
  ${props =>
    props.offset && takeReqOffset(props.offset, props.theme.grid.colCount)};
`;

export default withTheme(Col);
