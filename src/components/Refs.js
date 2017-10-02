import React, { Component } from 'react'
import { Input } from 'components/Styles'


export default class CustomTextInput extends Component {

	focusTextInput = () => {
		this.textInput.focus()
	}

	componentDidMount() {
		this.focusTextInput()
	}

	render() {
		return (
			<div>				
				<Input
					type="text"
					innerRef={input => this.textInput = input} 
				/>

				<button 
					onClick={this.focusTextInput}
					style={{ background: '#3FFFF' }}>Focus the text input
				</button>

			</div>
		)
	}
}