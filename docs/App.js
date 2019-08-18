import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

import {
  Div,
  StyleReset,
  ThemeProvider,
  Container,
  Icon,
  Button,
  Row,
  Col,
  Input,
  Text,
  Textarea,
  Checkbox,
  Label,
  Radiobox,
  Switch,
  Image,
  Anchor,
  Tag,
  Collapse,
  Modal,
  SideDrawer,
  Notification,
  Dropdown
} from "atomize";

const theme = {
  grid: {
    containerMaxWidth: {
      xl: "1280px"
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };

    this.currentElement = React.createRef();
  }

  componentDidMount() {
    console.log(this.currentElement);
  }

  render() {
    const { selected } = this.state;

    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <Dropdown
            w="fit-content"
            isOpen={selected}
            onClick={() => this.setState({ selected: !selected })}
            menu={menuList}
          >
            Click me
          </Dropdown>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;

const menuList = (
  <Div>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </Div>
);
