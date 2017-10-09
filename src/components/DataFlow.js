import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

class DataFlow extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			users: [
				{ id: 1, name: 'Mette' },
				{ id: 2, name: 'Christian' },
				{ id: 3, name: 'Frederik' },
				{ id: 4, name: 'Viola' },
				{ id: 5, name: 'Mathilde K' },
				{ id: 6, name: 'Amalie' },
				{ id: 7, name: 'Max' },
				{ id: 8, name: 'Mathilde P' },
			]
		}
	}
	// Delete clicked user
	handleClick = (id) => {
		this.setState(prevState => {
			return {
				users: prevState.users.filter(user => user.id !== id)
			}
		})
	}
	// This function is passed down do UserList to render a user
	renderUser = (user) => {
		return <User key={user.id} user={user} onClick={this.handleClick} />
	}

	render() {
		return <UserList users={this.state.users} render={this.renderUser} />
	}
}

export default DataFlow

class UserList extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.users !== nextProps.users
	}

	render() {
		const { users, render } = this.props
		return (
			<div>
				<h1>Users</h1>
				<ul>
					{users.map(render)}
				</ul>
			</div>
		)
	}
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	render: PropTypes.func.isRequired
}

// Try declaring the user class as Component and not PureComponent and see the change. 
class User extends PureComponent {

	handleClick = () => {
		this.props.onClick(this.props.user.id)
	}

	render() {
		console.log(`${this.props.user.name} just rendered`)
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
