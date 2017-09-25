import React, { Component } from "react";

export default class Container extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  renders = 0;

  increment = () => this.setState(state => ({ count: state.count + 1 }));

  render() {
    const Button = this.props.button;
    return (
      <div>
        <div>{++this.renders} Container Renders</div>
        <h3>Count: {this.state.count}</h3>
        <div>The first button is using a this-bound member function</div>
        <div>
          <Button increment={this.increment} />
        </div>
        <div>The second button is using a fat arrow function.</div>
        <div>
          <Button increment={() => this.increment()} />
        </div>
      </div>
    );
  }
}
