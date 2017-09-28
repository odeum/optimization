import React from "react"

const Commentlist = props => (
	<ul>
		{props.comments.map(({ name, body }, index) =>
			<li key={index}>{name}-{body}</li>
		)}
	</ul>
)

export default Commentlist

