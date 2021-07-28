import React, { useEffect, useState } from 'react';
import getPosts from '../../services/posts';
import Post from './Post'
import CreatePost from './CreatePost';

const Lister = () => {

	const [loading, setLoading] = useState(true); 
	const [allPosts, setPosts] = useState([]);
	

	useEffect(() => {
		getPosts().then(data => {
			setLoading(false);
			setPosts(data);
			
		});
	}, []);

	const onDeletePost = (id) => {
		const newPosts = allPosts.filter(x => {
			return x.id !== id;
		});
		setPosts(newPosts);
	
	}

	

	const onCreatePost = post => {
		const ids = allPosts.map(post => post.id);
		const sorted = ids.sort((a, b) => a - b);
		const newId = sorted.length > 0 ? sorted[sorted.length - 1] + 1 : 1;
		const newPost = {fullName : post.fullName, address:post.address, phone:post.phone, id: newId};
		setPosts(oldArray => [...oldArray, newPost]);
		
	}

	return (
		<>
			{ loading && <div>Loading...</div> }
			{allPosts.length === 0 && <div>No posts available...</div>}
			<div className="postList">
				{
					allPosts.map((post) => {
						return <Post fullName={post.fullName} address={post.address} phone={post.phone} onDelete={onDeletePost} id={post.id} key={post.id} />
					})}
			</div>
			<div className="postList">
				<CreatePost onCreate={onCreatePost} />
			</div>

			
		</>
	);
};

export default Lister;

<table>
	<tbody>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>

</table>