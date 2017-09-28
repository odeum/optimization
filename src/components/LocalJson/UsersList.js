import React from "react"

const UsersList = props => (
	<ul>
		{props.users.map(({ name, email }, index) =>
			<li key={index}>{name} - {email}</li>
		)}
	</ul>
)

export default UsersList

