import React from "react"
import PhotosList from "./PhotosList"


class PhotosListContainer extends React.Component {
	constructor() {
		super()
		this.state = { photos: [] }
	}

	fetchAsync = async () => {
		let data = await (await fetch('https://jsonplaceholder.typicode.com/photos', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})).json()
		return data	
	}

	componentDidMount() {
		this.fetchAsync()
			.then(photos => this.setState({ photos }))
			.catch(error => console.log(error.message))
	}

	render() {
		return <PhotosList photos={this.state.photos} />
	}
}

export default PhotosListContainer
