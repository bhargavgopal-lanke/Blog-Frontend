import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function MainPage() {


	const [postList, setPostList] = useState([]);
	let history = useHistory();

	useEffect(()=>{
		Axios.get('https://blog-mysql-deploy.herokuapp.com/api/get').then((data)=>{
			setPostList(data.data);
		});
	},[]);

	const likePost = (id) => {
		Axios.post(`https://blog-mysql-deploy.herokuapp.com/api/like/${id}`).then((response)=> {
			alert('you like a post');
		});
	};

	return(
		<div className="MainPage">
			<div className="postContainer">
			{postList.map((val,key)=>{
				return (
					<div className="post"  /*onClick={()=> {history.push(`/post/${val.id}`)}}*/ >
						<h1>{val.title}</h1>
						<p>
							{val.post_text.length > 500
								? val.post_text.substring(0, 500) + '.....'
								: val.post_text}
						</p>
						<button onClick={()=> {likePost(val.id)}}>Like </button>	
						<h4>{val.user_name}</h4>
						<h4>{val.likes}</h4>
						
					</div>
					)
			})}
			
			</div>
		</div>
		)
}