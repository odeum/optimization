import React from "react"
import PhotosList from "./PhotosList"

class PhotosListContainer extends React.Component {
	constructor() {
		super()
		this.state = { photos: [] }
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/photos', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			} 
		})
			.then(res => res.json())
			.then(photos => this.setState({ photos }))
	}

	render() {
		return <PhotosList photos={this.state.photos} />
	}
}

export default PhotosListContainer

