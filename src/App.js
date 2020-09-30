import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
  	<div>
	    <div className="navbar">
	    <div className="links">
		      <a href="/">Main Pages</a>
		      <a href="/createpost">Create Post</a>
	      </div>
	    </div>

	    <Router>
	    	<Route path="/" exact render={()=> <MainPage /> } />
	    	<Route path="/createpost" render={()=> <CreatePost /> }  />
	    	<Route path="/post/:postId" render={()=> <Post /> }  />
	    </Router>
    </div>
  );
}

export default App;
