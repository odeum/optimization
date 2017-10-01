import React, { PureComponent } from "react"

let renders

class MyPureButton extends PureComponent {
	renders = 0

	render() {
		return (
			<button onClick={this.props.increment}>
				I am a button and I have been rendered {++this.renders} times
      </button>
		)
	}
}

export default MyPureButton