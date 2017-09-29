import React, { Component } from 'react'
import CommentListContainer from 'components/CommentList/CommentListContainer'
import SeparationContainer from 'components/Separation'
import UsersListContainer from 'components/LocalJson/UsersListContainer'
import Connect, { Greeting } from 'components/Hoc'
// import WindFarmListContainer from 'components/WindFarms/WindFarmListContainer2'
import PhotosListContainer from 'components/Photos/PhotosListContainer'


const ConnectedComponent = Connect(Greeting)


class App extends Component {
	render() {
		return (
			<div>
				<SeparationContainer />
				<CommentListContainer />
				<UsersListContainer />
				<ConnectedComponent />
				{/* <WindFarmListContainer /> */}
				<PhotosListContainer />
			</div>
		)
	}
}

export default App
