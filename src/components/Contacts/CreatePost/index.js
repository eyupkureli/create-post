import React, { useReducer } from 'react';

const CreatePost = ({ onCreate }) => {
	const initialState = {
		fullName: '',
		address: '',
		phone: ''
	};

	const postReducer = (state, { type, ...payload }) => {
		switch (type) {
			case "update":
				if (payload.key === 'fullName') {
					return { ...state,  fullName: payload.value};
				} else if (payload.key === 'address') {
					return { ...state,  address: payload.value};
				} else if (payload.key === 'phone') {
					return { ...state,  phone: payload.value};
				}
				break;
			default:
				return initialState;

		}
	};

	const [{fullName, address, phone}, dispatch] = useReducer(postReducer, initialState)

	return (
		<form aria-label="Create post">
			<fieldset>
				<h3>Add new post</h3>
				<ul>
					<li>
						<label htmlFor="fullName">Full Name</label>
						<input type="text" id="fullName" value={fullName} onChange={({ target: { value } }) => dispatch({ type: 'update', key: 'fullName', value })}/>
					</li>
					<li>
						<label htmlFor="address">Address</label>
						<textarea id="address" value={address} onChange={({ target: { value } }) => dispatch({type: 'update', key: 'address', value})}></textarea>
					</li>
					<li>
						<label htmlFor="phone">Phone Number</label>
						<input type="text" id="phone" value={phone} onChange={({ target: { value } }) => dispatch({ type: 'update', key: 'phone', value })}/>
					</li>
				</ul>

				<button type="button" onClick={() => {
					onCreate({ fullName, address, phone });
					dispatch({ type: 'reset'})
				}}>Add post</button>
				<button type="button" onClick={() => dispatch({ type: 'reset'})}>Reset</button>
			</fieldset>
		</form>
	);
};

export default CreatePost;