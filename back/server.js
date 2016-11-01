//node require require on the backend
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const postModel = require('./posts/post-model');
const Post = mongoose.model('Post');

//the server needs to wait for the data base to be connected
mongoose.connect('mongodb://localhost/blog-app-test');
const db = mongoose.connection;

//ROUTES
app.get('/posts', (req, res)=>{
	Post.find({}, (err, data) => {
			res.send(data[data.length-1]);
		});
});

//refresh post url, save page, saved to db 
app.get('/', (req, res)=>{
	Post.create({title: 'hi amber!'}, (err, data)=>{
		if (err) console.log('you have an error');
		else console.log('post was created!');
	})
	res.send('post page');
});

db.on('open',()=> { 
	console.log('connection open');
  // we're connected!
	app.listen(5555, () =>{
		console.log("listening");
		// Post.create({title: 'test post 1'}, (err, data)=>{
		// 	if (err) console.log('you have an error');
		// 	else console.log('post was created!');
		// })
	 	Post.find({}, (err, data) => {
			console.log('Database data found!', data);
		});
	});
});

db.on('error', ()=>{
	console.log('err in db collection');
});
