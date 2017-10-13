import React, { Component } from 'react'

class ClickHandler extends Component {

	handleClick = (id, e) => {
		e.preventDefault()
		console.log(id)
	}


	render() {
		return <Child handleClick={this.handleClick} id={10} />
	}
}

export default ClickHandler


const Child = ({ handleClick, id }) =>
	(
		// eslint-disable-next-line
		<button onClick={(e) => handleClick(id, e)}>Click</button>
	)
