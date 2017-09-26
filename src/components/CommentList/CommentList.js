import React from "react"

const Commentlist = props => (
	<ul>
		{props.comments.map(({ name, body }) =>
			<li>{name}-{body}</li>
		)}
	</ul>
)

export default Commentlist

