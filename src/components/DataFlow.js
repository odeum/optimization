import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

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
		return (
			<div>
				<h1>Users</h1>
				<ul>
					{this.state.users.map(this.renderUser)}
				</ul>
			</div>
		)
	}
}


export default DataFlow

class User extends PureComponent {

	onDeleteClick = () => {		
		this.props.onClick(this.props.user.id)
	}

	render() {
		const { user } = this.props
		return (
			<li>
				<input
					type="button"
					value="Delete"
					onClick={this.onDeleteClick}
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

