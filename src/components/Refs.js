import React, { Component } from 'react'

export default class CustomTextInput extends Component {

	focusTextInput = () => {
		this.textInput.focus()
	}

	render() {
		return (
			<div>
				<input
					type="text"
					ref={input => this.textInput = input} 
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