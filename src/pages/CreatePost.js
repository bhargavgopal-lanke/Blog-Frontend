import React, {useState} from 'react';
import Axios from 'axios';
import '../App.css';

export default function CreatePost() {


	const [userName, setUserName] = useState('');
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');


	/*useEffect(()=>{

		console.log(userName + title + text);

	}, [userName, title, text]);*/

	/*AXIOS MAKES ME ALLOW TO HTTP REQUESTS TO BACKEND*/

	const submitPost = () => {
		Axios.post('http://localhost:3001/api/create', 
			{
				userName: userName,
			 	title: title,
			  	text: text,	
			});
	};


	return(
		<div className="CreatePost">
				
			<div className="uploadPost">
				<label>
					Username
				</label>
				<input type="text" onChange={(e)=> {
					setUserName(e.target.value);
				}} />
				<label>
					Title
				</label>
				<input type="text" onChange={(e)=> {
					setTitle(e.target.value);
				}} />
				<label>
					Post Text
				</label>
				<textarea rows="3" onChange={(e)=>{
					setText(e.target.value);
				}} ></textarea>

				<button onClick={submitPost} >Submit</button>
				
			</div>
		</div>
		)
}