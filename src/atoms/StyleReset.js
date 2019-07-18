import { createGlobalStyle } from "styled-components";
import { withTheme } from "../core/theming";

const StyleReset = createGlobalStyle`
  html {
    font-size: 16px;
  }

  ::selection {
    color: #fff;
    background: #444;
  }

  body {
    font-size: ${props => props.theme.textSize.size["body"]};
    line-height: ${props => props.theme.textSize.height["body"]};    
    margin: 0;
    font-family: ${props => props.theme.fontFamily["primary"]};
    -webkit-font-smoothing: antialiased;
    color: #000;
  }

  p, h1, h2, h3, h4, h5, h6 { font-size: ${props =>
    props.theme.textSize.size["body"]}; line-height: ${props =>
  props.theme.textSize.height["body"]}
  }

  a {
    color: ${props => props.theme.colors["info700"]};
    cursor: pointer;
    text-decoration: none;
  }

  input { border: none }

  button {
    border: none;
  }

  pre {
    margin: 0;
    padding: 1rem;
    font-size: ${props => props.theme.textSize.size["caption"]};
    line-height: ${props => props.theme.textSize.height["body"]};
    font-family: ${props => props.theme.fontFamily["code"]};
  }
`;

export default withTheme(StyleReset);
