import React, { Component } from "react";
import { Div, StyleReset, Button, Icon } from "atomize";

class App extends Component {
  render() {
    return (
      <Div>
        <StyleReset />
        <Button bg="white" title="test">
          <Icon name="Logout" size="2rem" />
        </Button>
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
