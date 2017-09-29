import React from "react"

const PhotosList = props => (
	<ul>
		{props.photos.map(({ id, title, thumbnailUrl }, index) =>
			<div key={index}>				
				<div>ID: {id}</div>
				<div>TITLE: {title}</div>
				<div>THUMB: {thumbnailUrl}</div>
				<br/>
			</div>
		)}
	</ul>
)

export default PhotosList

