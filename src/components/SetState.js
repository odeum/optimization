import React, { Component } from 'react'

class SettingState extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			counter: 0
		}
	}
	
	callback = () => {
		console.log('Callback initiated ... ')
	}

	setState1 = () => {
		this.setState({ counter: 10 })
	}

	setState2 = () => {
		this.setState({ counter: 20 }, this.callback)
	}

	setState3 = () => {
		this.setState((prevState, props) => ({
			counter: prevState.counter + 1 //props.increment
		}))
	}

	setState4 = () => {
		this.setState((prevState, props) => ({
			counter: prevState.counter + 2 // props.increment
		}), this.callback)
	}

	render() {
		return (
			<div>
				<button onClick={this.setState1}>setState 1 - {this.state.counter}</button>
				<button onClick={this.setState2}>setState 2 - {this.state.counter}</button>
				<button onClick={this.setState3}>setState 3 - {this.state.counter}</button>
				<button onClick={this.setState4}>setState 4 - {this.state.counter}</button>
			</div>
		)
	}
}

export default SettingState
