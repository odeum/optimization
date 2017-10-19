import React, { Component, PureComponent } from 'react'

class Button extends PureComponent {
	render() {
		console.log("Button render")

		return (
			<button onClick={this.props.onClick}>
				{this.props.children}
			</button>
		)
	}
}

// var test = true

class Rerender extends Component {

	state = {
		something: false
	}

	// componentDidMount() {
	// 	setInterval(() => {
	// 		test = !test
	// 		this.setState({ something: test })
	// 	}, 500)
	// }

	handleClick = (num) => {
		return () => {
			console.log(num, ' ', Math.random())
		}
	}

	doMath = () => {
		console.log('Render Math')
		return Math.random()
	}

	render() {
		console.log("Re-render")
		return (
			<Button onClick={this.handleClick(this.doMath())}>
				Rerender?
			</Button>
		)
	}
}

export default Rerender