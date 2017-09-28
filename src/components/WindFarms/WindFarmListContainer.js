import React from "react"
import WindFarmList from "./WindFarmList"

class WindFarmListContainer extends React.Component {
	constructor() {
		super()
		this.state = { windfarms: [] }
	}

	componentDidMount() {
		fetch('https://gc2.dbbjackup.dk/api/v1/sql/dbb?q=select%20*%20from%20public.owf', { mode: 'no-cors' })
			.then(res => res.json())
			.then(windfarms => this.setState({ windfarms }))
	}

	render() {
		return (
			<WindFarmList windfarms={this.state.windfarms} />
		)
	}
}

export default WindFarmListContainer

/*

, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			mode: 'no-cors'
		}

*/

