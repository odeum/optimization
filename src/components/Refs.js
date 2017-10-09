import React, { Component } from 'react'
import { Input } from 'components/Styles'


export default class CustomTextInput extends Component {

	componentDidMount() {
		this.focusTextInput()
	}

	createRef = (input) => {
		this.textInput = input
	}

	focusTextInput = () => {
		this.textInput.focus()
	}

	render() {
		return (
			<div>				
				<Input
					type="text"
					innerRef={this.createRef} 					
				/>
				<button 
					type="button"
					onClick={this.focusTextInput}
					style={{ background: '#3FFFF' }}>Focus the text input
				</button>
			</div>
		)
	}
}