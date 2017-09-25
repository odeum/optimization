import React from "react";
import { render } from "react-dom";
import Container from "./Container";
import MyButton from "./MyButton";
import MyPureButton from "./MyPureButton";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
  div {
    margin: 15px 5px;
  }
`;

const App = () =>
  <StyledApp>
    <h1>Regular Button Component</h1>
    <Container button={MyButton} />
    <div>Notice how each button renders as many times as the container.</div>
    <hr />
    <h1>Pure Button Component</h1>
    <Container button={MyPureButton} />
    <div>
      Notice how <strong>only the fat arrow button</strong> renders as many
      times as the container.
    </div>
  </StyledApp>;

render(<App />, document.getElementById("root"));
