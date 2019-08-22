import React, { Component } from "react";
import { ThemeContext } from "../core/ThemeContext";

class StyleReset extends Component {
  render() {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `html { font-size: 16px } body { font-size: ${
            this.context.textSize.size.body
          }; line-height: ${
            this.context.textSize.height.body
          }; -webkit-font-smoothing: antialiased; font-family:${
            this.context.fontFamily.primary
          }; margin: 0; color: ${
            this.context.colors.black
          }; } p, h1, h2, h3, h4, h5, h6 { padding: 0; margin: 0; font-size: ${
            this.context.textSize.size.body
          }; line-height: ${
            this.context.textSize.height.body
          };} input { border: none; font-family: inherit } a {
            margin: 0;
            padding: 0;
            color: ${this.context.colors.info700};
            cursor: pointer;
            text-decoration: none;
          } button { border: none } pre {
            margin: 0; padding: 1rem; font-size: ${
              this.context.textSize.size.body
            };
            line-height: ${this.context.textSize.height.body};
            font-family: ${this.context.fontFamily.code};
          } :focus {outline: none;}`
        }}
      />
    );
  }
}

StyleReset.contextType = ThemeContext;

export default StyleReset;
