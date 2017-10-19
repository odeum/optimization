import React, { Component } from 'react'

class ClickHandler extends Component {

	handleClick1 = (argument) => (e) => {
		e.preventDefault()
		console.log(argument)
	}

	handleClick2 = (argument) => {
		return () => {
			console.log(argument)
		}
	}

	render() {
		return (
			<div>
				<Child handleClick={this.handleClick1('Argument in Event Handler')} />
				<Child handleClick={this.handleClick2('Argument in Event Handler')} />
			</div>
		)
	}
}

export default ClickHandler


const Child = ({ handleClick }) => { 
	console.log('Child render')
	return (
		<button onClick={handleClick}>Click</button> 
	)
}

