import React from "react"
import { create } from 'apisauce'
import WindFarmList from "./WindFarmList"

class WindFarmListContainer extends React.Component {
	constructor() {
		super()
		this.state = { windfarms: [] }
	}

	componentDidMount() {
		getData()
	}

	render() {
		return (
			<WindFarmList windfarms={this.state.windfarms} />
		) 
	}
}

export default WindFarmListContainer

/*

fetch('https://gc2.dbbjackup.dk/api/v1/sql/dbb?q=select%20*%20from%20public.owf', { mode: 'no-cors' })
			.then(res => res.json())
			.then(windfarms => this.setState({ windfarms }))


, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			mode: 'no-cors'
		}

*/


const api = create({
	baseURL: 'https://gc2.dbbjackup.dk/api/v1/sql/dbb?q=select%20*%20from%20public.owf',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	mode: 'no-cors'
})


async function getData() {
	var data = await api.get('')
		.then((response) => windfarms => this.setState({ windfarms }))
	/*   console.log('-----Config-----')
        console.log(data) */
	return data
}