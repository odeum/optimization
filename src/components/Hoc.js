// Higher Order Component - HOC - Enhancer Component 

import React, { Component } from 'react'


const Connect = WrappedComponent =>
	class extends Component {
		constructor() {
			super()
			this.state = { name: '' }
		}

		componentDidMount() {
			// this would fetch or connect to a store
			this.setState({ name: 'Christian' })
		}

		render() {
			return (
				<WrappedComponent
					{...this.props}
					name={this.state.name}
				/>
			)
		}
	}

export default Connect

