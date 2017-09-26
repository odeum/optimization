import React, { Component } from 'react'
import CommentListContainer from 'components/CommentList/CommentListContainer'
import SeparationContainer from 'components/Separation'
import Connect from 'components/Hoc'

const Greeting = ({ name }) => {
	if (!name) { return <div>Connecting...</div> }

	return <div>Hi {name}!</div>
}

const MyConnectedComponent = Connect(Greeting)


class App extends Component {
	render() {
		return (
			<div>
				<SeparationContainer />
				<CommentListContainer />
				<MyConnectedComponent />
			</div>
		)
	}
}

export default App
