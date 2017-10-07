import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

class User extends PureComponent {

	handleClick = () => {		
		this.props.onClick(this.props.user.id)
	}

	render() {
		const { user } = this.props
		return (
			<li>
				<input
					type="button"
					value="Delete"
					onClick={this.handleClick}
				/>
				{' '}{user.id}{': '}{user.name}
			</li>
		)
	}
}

User.propTypes = {
	user: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
}


class DataFlow extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			users: [
				{ id: 1, name: ' Mette ' },
				{ id: 2, name: ' Christian ' },
				{ id: 3, name: ' Frederik ' },
				{ id: 4, name: ' Viola ' },
				{ id: 5, name: ' Mathilde K ' },
				{ id: 6, name: ' Amalie ' },
				{ id: 7, name: ' Max ' },
				{ id: 8, name: ' Mathilde P ' },
			]
		}
	}
	
	deleteUser = (id) => {
		this.setState(prevState => {
			return {
				users: prevState.users.filter(user => user.id !== id)
			}
		})
	}

	renderUser = (user) => {
		return <User key={user.id} user={user} onClick={this.deleteUser} />
	}

	render() {
		return <UserList users={this.state.users} renderUser={this.renderUser} />
	}
}

export class UserList extends Component {
	render() {
		const { users, renderUser } = this.props
		return (
			<div>
				<h1>Users</h1>
				<ul>
					{users.map(renderUser)}
				</ul>				
			</div>
		)
	}
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	renderUser: PropTypes.func.isRequired
}

export default DataFlow
