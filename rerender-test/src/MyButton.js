import React, { Component } from "react"

let renders

class MyButton extends Component {
	renders = 0

	render() {
		return (
			<button onClick={this.props.increment}>
				I am a button and I have been rendered {++this.renders} times
      </button>
		)
	}
}

export default MyButton
