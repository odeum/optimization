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
			.then((response) => {
				if (response.status !== 200) {
					console.log(`Error fetching users: ${response.status}`)
				} else {
					response.json().then(users => this.setState({ users }))
					console.log(response.status)
				}
			})
			.catch((error) => console.log(`Error fetching recipes: ${error}`))
	}

	render() {
		return <UsersList users={this.state.users} />
	}
}

export default UsersListContainer

// function fetchData(url, callback) {
// 	fetch(url)
// 		.then((response) => {
// 			if (response.status !== 200) {
// 				console.log(`Error fetching recipes: ${response.status}`);
// 			} else {
// 				response.json().then(callback);
// 			}
// 		})
// 		.catch((err) => console.log(`Error fetching recipes: ${err}`))
// }

/*

		fetch('/users.json', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(response => response.json())
			.then(users => this.setState({ users }))

*/