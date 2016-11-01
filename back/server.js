// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const postModel = require('./posts/posts-model');
// const Post = mongoose.model('Post');

// mongoose.connect('mongodb://localhost/blog-app-test');

// const db = mongoose.connection;

// app.get('/', (req, res) => {
//   res.send('Hey from the / page');
// });

// app.get('/posts', (req, res) => {
//   res.send('Hey from the posts page');
// });


// db.on('open', () => {
//   console.log('db connection opened!');
//   app.listen(5555, () => {
//     console.log('Listening on port 5555');
//     //Creating a test post everytime the server refreshes
//     Post.create({title: 'test post 1'}, (err, data) => {
//       if(err) console.log('Error with database!');
//       else console.log('Post created!');
//     })
//     //Find all posts and log to console
//     Post.find({}, (err, data) => {
//       console.log('Database data found!', data);
//     })
//     //Find all posts that match specific title
//     Post.find({title: 'find this title'}, (err, data) => {
//       console.log('Database data found!', data);
//     })
//   });
// })

// db.on('error', () => {
//   console.log('error in db connection!');
// })


const express = require('express');
//node require require on the backend
const mongoose = require('mongoose');
const app = express();
const postModel = require('./posts/post-model')
const Post = mongoose.model('Post')

mongoose.connect('mongodb://localhost/blog-app-test');
//the server needs to wait for the data base to be connected
const db = mongoose.connection;
app.get('/', (req, res)=>{
	res.send('found page')
})
app.get('/post', (req, res)=>{
	res.send('post page')
})

db.on('open',()=> { 
	console.log('connection oppen') 
  // we're connected!
	app.listen(5555, () =>{
		console.log("listening")
		Post.create({title: 'test post 1'}, (err, data)=>{
			if (err) console.log('you have an error');
			else console.log('post was created!')
		})
		// Post.find({}, err,data) => {
		// 	console.log('database foung', data)
		// }
	})
});
db.on('error', ()=>{
	console.log('err in db collection')
})
