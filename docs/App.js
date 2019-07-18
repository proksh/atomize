import React, { Component } from "react";
import { Div, StyleReset } from "atomize";

class App extends Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {
    console.log(this.node);
  }
  render() {
    return (
      <Div>
        <StyleReset />
        <Div
          minH="100vh"
          w="100vw"
          d="flex"
          flexDir="column"
          justify="center"
          align="center"
          p={{ x: "1rem", y: "4rem" }}
        >
          Start from here
        </Div>
      </Div>
    );
  }
}

export default App;
