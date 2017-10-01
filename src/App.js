import React, { Component } from 'react'
import CommentListContainer from 'components/CommentList/CommentListContainer'
import SeparationContainer from 'components/Separation'
import UsersListContainer from 'components/LocalJson/UsersListContainer'
import Connect, { Greeting } from 'components/Hoc'
import WindFarmListContainer from 'components/WindFarms/WindFarmListContainer'
import PhotosListContainer from 'components/Photos/PhotosListContainer'
import CustomTextInput from 'components/Refs'
import TextInput from 'components/TextInput'
import Timer from 'components/Timer'

const ConnectedComponent = Connect(Greeting)


class App extends Component {

	state = {
		isLoading: false
	}

	loadPhotos = () => {
		console.log('Loading photos ... ')
		this.setState({ isLoading: true })
		
		return <PhotosListContainer />
	} 

	loadIt() {
		return <PhotosListContainer />
	}

	render() {
		return (
			<div>
				<SeparationContainer />
				<CustomTextInput />
				<TextInput />
				<Timer />
				<CommentListContainer />
				<UsersListContainer />
				<ConnectedComponent />
				<WindFarmListContainer />
				
				<input
					type="button"
					value="Load photos ..."
					onClick={this.loadPhotos}
				/>
				{/* {this.loadIt()} */}
				{this.state.isLoading ? <PhotosListContainer /> : null}
			</div>
		)
	}
}

export default App
