import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Receiver
class ReceiveRenderFunction extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			coffee: "Latte",
			name: this.constructor.name,
			renderprop: 'renderFunction'
		}
	}

	render() {
		const { render } = this.props
		const { coffee, name, renderprop } = this.state

		return render(coffee, name, renderprop)
	}
}

// Render Prop
ReceiveRenderFunction.propTypes = {
	render: PropTypes.func.isRequired
}

// Render Prop function
const renderFunction = (beverage, name, renderprop) =>
	<div>
		Drinking a nice cup of {beverage} from a component named {name} passed by {renderprop}
	</div>

// Sender
class RenderProps extends Component {

	render() {
		return (
			<div>
				<ReceiveRenderFunction render={renderFunction} />
			</div>

		)
	}
}

export default RenderProps
