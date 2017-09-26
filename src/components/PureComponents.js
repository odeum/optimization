import React, { Component, PureComponent } from 'react'

export class PureComponentSCU extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false
	}

	render() {
		return (
			<div>	
			</div>
		)
	}
}

export class PureComponentPC extends PureComponent {

	render() {
		return (
			<div>
			</div>
		)
	}
}

