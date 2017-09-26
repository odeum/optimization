import React, { Component } from 'react'

// Stateful Container Component
// (Controller, Smart, Business Logic, Data (fetching)) - uses render, state, lifecycle events
class SmallCircleInCircle extends Component {
	constructor(props) {
		super(props)
		this.state = { smarts: 'smarts' }	
	}
	
	render() {
		const state = this.state
		return (
			<SmallCircle {...state} />
		)
	}
}

// Stateless Presentation Component
//  (View, Dumb, Display) - uses render, props, context
const SmallCircle = props => 
	<div>{props.smarts}</div>

	
export default SmallCircleInCircle

