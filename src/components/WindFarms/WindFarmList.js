import React from "react"

const WindFarmList = props => (
	<ul>
		{props.windfarms.features.map(({ properties }, index) =>
			<li key={index}>{properties.owf_name} - {properties.owner}</li>
		)}
	</ul>
)

export default WindFarmList

