import { Component } from 'react'
import PropTypes from 'prop-types'

import debounce from 'lodash.debounce'
import isEqual from 'lodash.isequal'


class Persist extends Component {

	persist = debounce((data) => {
		window.localStorage.setItem(this.props.name, JSON.stringify(data))
		console.log('Debounce')
	}, this.props.debounce)

	componentWillReceiveProps(nextProps) {
		if (!isEqual(nextProps, this.props.data)) {
			this.persist(nextProps)
		}
	}

	componentDidMount() {
		const data = window.localStorage.getItem(this.props.name)
		if (data && data !== null) {
			this.props.onMount(data)
		}
	}

	render() {
		return null
	}
}

Persist.propTypes = {
	name: PropTypes.string,
	data: PropTypes.any,
	debounce: PropTypes.number,
	onMount: PropTypes.func,
}

Persist.defaultProps = {
	debounce: 300,
}


export default Persist