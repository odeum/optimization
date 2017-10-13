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
import DataFlow from 'components/DataFlow'
import RenderProps from 'components/RenderProps'
import ComponentName from 'components/ComponentName'
import Purity from './components/Purity'
import ClickHandler from './components/ClickHandler'

// import Persist from 'components/Persist'

const ConnectedComponent = Connect(Greeting)


class App extends Component {

	state = {
		isLoading: false
	}

	loadPhotos = () => {
		this.setState({ isLoading: true })		
	} 

	onMount = () => {
		let data = this.state
		this.setState(data)
	}

	render() {
		return (
			<div>
				<input
					type="button"
					value="Load photos ..."
					onClick={this.loadPhotos}
				/>

				<SeparationContainer />
				<CustomTextInput />
				<TextInput />
				<Timer />
				<CommentListContainer />
				<UsersListContainer />
				<ConnectedComponent />
				<WindFarmListContainer />

				<DataFlow />

				<RenderProps />

				<ComponentName />

				<Purity />
		
				<ClickHandler />

				{this.state.isLoading && <PhotosListContainer />}
				{/* <Persist
					name="saved-state"
					data={this.state}
					debounce={500}
					onMount={this.onMount} // data => this.setState(data)
				/> */}
			</div>
		)
	}
}

export default App
