import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

import { Container, Div, Text, Dropdown, Anchor, Row, Col, StyleReset, ThemeProvider, Slider, SliderFiller, SliderThumb, SliderTrack } from "atomize";

const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};


const listTheme = ["brand", "black", "gray", "success", "info", "warning", "danger"]

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      customFiller: 'info800',
      customThumb: 'gray300',
      customTrack: 'gray400',
      openFiller: false,
      openThumb: false,
      openTrack: false
    }
  }

  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
            <StyleReset />
            <Container justify="center" p={{ t: '1rem', b:'5rem' }}>
              <Row m={{ b:'3rem' }}>
                <Col justify="center">
                  <Text tag="h1" textSize="display2">Introduction to Slider components</Text>
                </Col>
              </Row>
              <Row m={{ b:'3rem' }}>
                <Col>
                  <b>Slider</b> use a react context for work with his children <b>SliderTrack</b>, <b>SliderFiller</b> and <b>SliderThumb</b>
                </Col>
              </Row>
              <Row>
                <Col d="flex" justify="center">
                    <Text tag="span">Basic <b>Slider</b> look like this : </Text>
                </Col>
                <Col d="flex" justify="center">
                  <Text tag="span"><b>Slider</b> can also be vertical with <b>orientation='vertical'</b> prop.<br /> It's look like : </Text>
                </Col>
                <Col d="flex" justify="center">
                  <Text tag="span">Customizable :</Text>
                </Col>
              </Row>
              <Row m={{ b: '2rem' }} h="200px">
                <Col textSize="paragraph" d="flex" flexDir="column" align="center" justify="center">
                    <Slider>
                      <SliderTrack />
                      <SliderFiller />
                      <SliderThumb />
                    </Slider>
                </Col>
                <Col textSize="paragraph" d="flex" flexDir="column" align="center" justify="center">
                  <Slider orientation="vertical" h="150px">
                    <SliderTrack />
                    <SliderFiller />
                    <SliderThumb />
                  </Slider>
                </Col>
                <Col textSize="paragraph" d="flex" flexDir="column" align="center" justify="center">
                <Slider h="50px" w="250px" defaultValue={75}>
                    <SliderTrack color={this.state.customTrack} />
                    <SliderFiller color={this.state.customFiller} />
                    <SliderThumb color={this.state.customThumb} />
                  </Slider>
                  <Div>
                    <Row>
                      <Col>
                        <Row d="flex" flexDir="row" flexWrap="nowrap">
                          <Col flex="1">
                            <Dropdown w="fit-content" onClick={() => this.setState({openFiller: !this.state.openFiller})} isOpen={this.state.openFiller} menu={this.listFiller()}>SliderFiller</Dropdown>
                          </Col>
                          <Col flex="1">
                            <Dropdown w="fit-content" onClick={() => this.setState({openThumb: !this.state.openThumb})} isOpen={this.state.openThumb} menu={this.listThumb()}>SliderThumb</Dropdown>
                          </Col>
                          <Col flex="1">
                            <Dropdown w="fit-content" onClick={() => this.setState({openTrack: !this.state.openTrack})} isOpen={this.state.openTrack} menu={this.listTrack()}>SliderTrack</Dropdown>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Div>
                </Col>
              </Row>
              <Row p={{t: '3rem'}}>
                {/* PRESENTATION & PROPS LIST OF ALL NEW COMPONENTS */}
                <Col>
                  <Text tag="h2" textSize="display1" m={{b: ".5rem"}}>Slider</Text><Div><table class="collection-content"><thead><tr><th>Avail Props</th><th>Default</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td class="cell-title">step</td><td class="cell-~[@|">1</td><td class="cell-lLID">The stepping interval</td><td class="cell-)]iE">Int | Float | &gt; 0</td></tr><tr><td class="cell-title">min</td><td class="cell-~[@|">0</td><td class="cell-lLID">The minimum permitted value</td><td class="cell-)]iE">Int | Float</td></tr><tr><td class="cell-title">max</td><td class="cell-~[@|">100</td><td class="cell-lLID">The maximum permitted value</td><td class="cell-)]iE">Int | Float</td></tr><tr><td class="cell-title">defaultValue</td><td class="cell-~[@|">50</td><td class="cell-lLID">The default value</td><td class="cell-)]iE">Int | Float</td></tr><tr><td class="cell-title">orientation</td><td class="cell-~[@|">&#x27;horizontal&#x27;</td><td class="cell-lLID">&#x27;horizontal&#x27;|&#x27;vertical&#x27;</td><td class="cell-)]iE">String</td></tr><tr><td class="cell-title">isDisabled</td><td class="cell-~[@|">false</td><td class="cell-lLID">Disable the component usage</td><td class="cell-)]iE">Boolean</td></tr><tr><td class="cell-title">name</td><td class="cell-~[@|">-</td><td class="cell-lLID">The name used in form</td><td class="cell-)]iE">String</td></tr><tr><td class="cell-title">onChange</td><td class="cell-~[@|">-</td><td class="cell-lLID">Return value when it&#x27;s change</td><td class="cell-)]iE">Function</td></tr><tr><td class="cell-title">p</td><td class="cell-~[@|">-</td><td class="cell-lLID"></td><td class="cell-)]iE"></td></tr><tr><td class="cell-title">m</td><td class="cell-~[@|">-</td><td class="cell-lLID"></td><td class="cell-)]iE"></td></tr><tr><td class="cell-title">w</td><td class="cell-~[@|">-</td><td class="cell-lLID"></td><td class="cell-)]iE"></td></tr><tr><td class="cell-title">h</td><td class="cell-~[@|">-</td><td class="cell-lLID"></td><td class="cell-)]iE"></td></tr><tr><td class="cell-title">minW</td><td class="cell-~[@|">-</td><td class="cell-lLID"></td><td class="cell-)]iE"></td></tr><tr><td class="cell-title">minH</td><td class="cell-~[@|">-</td><td class="cell-lLID"></td><td class="cell-)]iE"></td></tr><tr><td class="cell-title">maxW</td><td class="cell-~[@|">-</td><td class="cell-lLID"></td><td class="cell-)]iE"></td></tr><tr><td class="cell-title">maxH</td><td class="cell-~[@|">-</td><td class="cell-lLID"></td><td class="cell-)]iE"></td></tr></tbody></table></Div>
                </Col>
                <Col d="flex" flexDir="column" justify="space-between">
                  <Div>
                    <Text tag="h2" textSize="title" m={{b: ".5rem"}}>SliderThumb</Text><Div><table class="collection-content"><thead><tr><th>Avail Props</th><th>Default</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td class="cell-title">color</td><td class="cell-~[@|">&#x27;gray200&#x27;</td><td class="cell-lLID">The color used, theme variables</td><td class="cell-)]iE">String</td></tr></tbody></table></Div>
                  </Div>
                  <Div>
                    <Text tag="h2" textSize="title" m={{b: ".5rem"}}>SliderTrack</Text><Div class="page-body"><table class="collection-content"><thead><tr><th>Avail Props</th><th>Default</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td class="cell-title">color</td><td class="cell-~[@|">&#x27;gray300&#x27;</td><td class="cell-lLID">The color used, theme variables</td><td class="cell-)]iE">String</td></tr></tbody></table></Div>
                  </Div>
                  <Div>
                    <Text tag="h2" textSize="title" m={{b: ".5rem"}}>SliderFiller</Text><Div class="page-body"><table class="collection-content"><thead><tr><th>Avail Props</th><th>Default</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td class="cell-title">color</td><td class="cell-~[@|">&#x27;info800&#x27;</td><td class="cell-lLID">The color used, theme variables</td><td class="cell-)]iE">String</td></tr></tbody></table></Div>
                  </Div>
                </Col>
              </Row>
              <Row p={{t: '3rem'}}>
              </Row>
              <Row>
                {/* ROADMAP */}
                <Col>
                  <Text tag="h2" textSize="display1">ROADMAP</Text>
                  <ul><li>More customization about SliderThumb, SliderTrack &amp; SliderFiller</li><li>More features</li><li>Thinking about &quot;range&quot; feature</li><li>Thinking about multiple SliderThumb inside same Slider</li></ul>
                </Col>
              </Row>
            </Container>
        </ThemeProvider>
      </StyletronProvider>
    );
  }

  selection (a, b) {
    switch(a) {
      case 'filler':
        this.setState({customFiller: b + '800'})
        break;
      case 'track': 
        this.setState({customTrack: b + '400'})
      break;
      case 'thumb': 
        this.setState({customThumb: b + '300'})
      break;
    }
  }

  listFiller () {
    return (<Div p={{ x: "1rem", y: "0.5rem" }}>{listTheme.map(v => (<Anchor onClick={() => this.selection('filler', v)} d="block" p={{ y: "0.25rem"}} value={v}>{v}</Anchor>))}</Div>)
  }

  listTrack () {
    return (<Div p={{ x: "1rem", y: "0.5rem" }}>{listTheme.map(v => (<Anchor onClick={() => this.selection('track', v)} d="block" p={{ y: "0.25rem"}} value={v}>{v}</Anchor>))}</Div>)
  }

  listThumb () {
    return (<Div p={{ x: "1rem", y: "0.5rem" }}>{listTheme.map(v => (<Anchor onClick={() => this.selection('thumb', v)} d="block" p={{ y: "0.25rem"}} value={v}>{v}</Anchor>))}</Div>)
  }
}

export default App;
