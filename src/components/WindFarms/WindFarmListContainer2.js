import React from "react"
import WindFarmList from "./WindFarmList"

class WindFarmListContainer extends React.Component {
	constructor() {
		super()
		this.state = { 
			windfarms: [],
			dataLoaded: false
		}
	}

	componentDidMount() {
		fetch('https://gc2.dbbjackup.dk/api/v1/sql/dbb?q=select%20*%20from%20public.owf', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			mode: 'no-cors'
		})
			.then((response) => {
				if (response.status !== 200) {
					console.log(`Error fetching windfarms: ${response.status}`)
				} else {
					response.json().then(windfarms => this.setState({ windfarms, dataLoaded: true }))
					console.log(response.status)
				}
			})
			.catch((error) => console.log(`Error fetching windfarms: ${error}`))
	}

	render() {
		return this.state.dataLoaded ? <WindFarmList windfarms={this.state.windfarms} /> : null
	}
}

export default WindFarmListContainer

