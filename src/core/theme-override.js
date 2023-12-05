// Overwriting an existing color
import { ThemeProvider, Div, Text } from "atomize";

const theme = {
  colors: {
    brand100: "#F9F8FC",
    brand200: "#F3F1FA",
    brand300: "#E9E6F6",
    brand400: "#D2CCEC",
    brand500: "#BCB3E2",
    brand600: "#9C8FD6",
    brand700: "#6F5CC3",
    brand800: "#553EB5",
    brand900: "#382683",
  }
};

const BrandColors = () => (
  <ThemeProvider theme={theme}>
      <Div d="flex">
        {["100", "200", "300", "400", "500", "600", "700", "800", "900"].map(
          shade => (
            <Div
              m={{ r: "1rem" }}
              w="2rem"
              d="flex"
              flexDir="column"
              align="center"
            >
              <Div
                bg={`brand${shade}`}
                rounded="circle"
                h="2rem"
                w="2rem"
                m={{ b: "0.5rem" }}
              />
              <Text
                textSize="tiny"
                textAlign="center"
                textWeight="500"
                textColor="medium"
              >
                brand
                <br />
                {shade}
              </Text>
            </Div>
          )
        )}
      </Div>
    </ThemeProvider>
)

ReactDOM.render(<BrandColors />, mountNode);
// Adding Your Shadow
import {
  ThemeProvider,
  Div,
  Row,
  Col } from "atomize";

const theme = {
  shadows: {
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Div
      h="3.5rem"
      p={{ x: "1rem" }}
      shadow="new-shadow"
      rounded="lg"
      d="flex"
      align="center"
      justify="center"
      textColor="medium"
    >
      New Shadow
    </Div>
  </ThemeProvider>
  , mountNode
);
// Changing the secondary font
import { Text, ThemeProvider } from "atomize";

const theme = {
  fontFamily: {
    primary: "Noto Sans",
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Text fontFamily="secondary" textSize="heading">
      This is different font
    </Text>
  </ThemeProvider>
  , mountNode
);
