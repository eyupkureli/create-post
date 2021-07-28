import React from 'react';

const Post = ({ fullName, address, phone, onDelete, id }) => (
	<div className="postView">
		<h2>{fullName}</h2>
		<p>{address}</p>
		<p>{phone}</p>
		<button onClick={() => onDelete(id)}>Delete</button>
	</div>
)

export default Post;