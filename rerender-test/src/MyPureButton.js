import React, { PureComponent } from "react";

export default class MyPureButton extends PureComponent {
  renders = 0;

  render() {
    return (
      <button onClick={this.props.increment}>
        I am a button and I have been rendered {++this.renders} times
      </button>
    );
  }
}
