import React, { Component } from 'react'

// Stateful Container Component
// (Controller, Smart, Business Logic, Data (fetching)) - uses render, state, lifecycle events
class SeparationContainer extends Component {
	constructor(props) {
		super(props)
		this.state = { name: 'Christian Broberg', title: 'CEO' }	
	}
	
	render() {
		const state = this.state
		return (
			<Separated {...state} />
		)
	}
}

// Stateless Presentation Component
//  (View, Dumb, Display) - uses render, props, context
const Separated = props => 
	<div>{props.name}{', '}{props.title}</div>

	
export default SeparationContainer

