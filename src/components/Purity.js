import React, { PureComponent } from 'react'
import { Input } from 'components/Styles'

export class Purity extends PureComponent {

	handleChange = (e) => {
		this.props.handleChange(e.target.value)
	}

	render() {
		return <Input onChange={this.handleChange} />
	}
}

