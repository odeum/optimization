import React, { Component } from 'react'
import { Input } from 'components/Styles'


export default class CustomTextInput extends Component {

	focusTextInput = () => {
		this.textInput.focus()
	}

	render() {
		return (
			<div>
				<Input
					type="text"
					innerRef={input => this.textInput = input} 
				/>
				<input
					type="button"
					value="Focus the text input"
					onClick={this.focusTextInput}
				/>
			</div>
		)
	}
}