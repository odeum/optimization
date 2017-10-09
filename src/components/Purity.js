import React, { PureComponent } from 'react'
import { Input } from 'components/Styles'

export default class Purity extends PureComponent {

	handleChange = (e) => {
		this.props.handleChange(e.target.value)
	}

	render() {
		return <Input onChange={(e) => this.handleChange} />
	}
}

