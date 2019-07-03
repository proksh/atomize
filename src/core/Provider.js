import * as React from "react";
import { ThemeProvider } from "./theming";

export default class Provider extends React.Component {
  render() {
    const { children, theme } = this.props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}
