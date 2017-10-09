import React, { Component } from 'react'
import PropTypes from 'prop-types'


class GetMyName extends Component {

	state = { 
		name: this.constructor.name
	}

	render() {
		return this.props.render(this.state.name)
	}
}

GetMyName.propTypes = {
	render: PropTypes.func.isRequired
}


const renderFunction = (name) =>
	<div>
		Component name: {name}
	</div>


class ComponentName extends Component {
	
	render() {
		return (
			<div>
				<GetMyName render={renderFunction} />				
			</div>
			
		)
	}
}

export default ComponentName

