import React from "react"
import UsersList from "./UsersList"

class UsersListContainer extends React.Component {
	constructor() {
		super()
		this.state = { users: [] }
	}

	componentDidMount() {
		fetch('/users.json', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			} 
		})
			.then(res => res.json())
			.then(users => this.setState({ users }))
	}

	render() {
		return <UsersList users={this.state.users} />
	}
}

export default UsersListContainer

