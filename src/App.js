import React, { Component } from 'react'
import CommentListContainer from 'components/CommentList/CommentListContainer'
import SeparationContainer from 'components/Separation'
import UsersListContainer from 'components/LocalJson/UsersListContainer'
import Connect, { Greeting } from 'components/Hoc'
import WindFarmListContainer from 'components/WindFarms/WindFarmListContainer'
import PhotosListContainer from 'components/Photos/PhotosListContainer'
import CustomTextInput from 'components/Refs'
import TextInput from 'components/TextInput'

const ConnectedComponent = Connect(Greeting)


class App extends Component {
	render() {
		return (
			<div>
				<SeparationContainer />
				<CustomTextInput />
				<TextInput />
				<CommentListContainer />
				<UsersListContainer />
				<ConnectedComponent />
				<WindFarmListContainer />
				<PhotosListContainer />
			</div>
		)
	}
}

export default App
