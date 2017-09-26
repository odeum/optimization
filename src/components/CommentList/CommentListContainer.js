import React from "react"
import CommentList from "./CommentList"

class CommentListContainer extends React.Component {
	constructor() {
		super()
		this.state = { comments: [] }
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1/comments') // '/comments.json'
			.then(res => res.json())
			.then(comments => this.setState({ comments }))
	}

	render() {
		return <CommentList comments={this.state.comments} />
	}
}

export default CommentListContainer

