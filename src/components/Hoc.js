// Higher Order Component - HOC

import React, { Component } from 'react'


const Connect = ComposedComponent =>
	class extends Component {
		constructor() {
			super()
			this.state = { name: '' }
		}

		componentDidMount() {
			// this would fetch or connect to a store
			this.setState({ name: 'Michael' })
		}

		render() {
			return (
				<ComposedComponent
					{...this.props}
					name={this.state.name}
				/>
			)
		}
	}

export default Connect

