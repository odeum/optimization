import React, { Component } from 'react'
import { Input } from 'components/Styles'

class TextInput extends Component {

	state = {
		value: ''
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value })
		console.log(this.state.value)
	}

	render() {
		return (
			<Input
				type="text"
				value={this.state.value}
				onChange={this.handleChange}
			/>
		)
	}
}

export default TextInput

