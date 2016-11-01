//BLOG POSTS:
//Title of blog posts
//Date posted
//Blog post text
//Categories/tags
//Images for post
//Comments on posts
//Author of blog posts
//archive: Boolean

//AUTHORS:
//name
//email
//password
//bio
//articles

//FOLLOWERS/READERS:
//Users
//name
//comments
//email
//password
//date joined
//age

const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
	title: {type: String, require: true},
	author: String,
	date: Date,
	tags: String,
	images: String, 
	comments: String
});

const userSchema = mongoose.Schema({
	name: String, 
	email: String, 
	password: String,
	bio: String, 
	articles: Array
})

// const followerSchema = mongoose.Schema({
// 	users: Number,
// 	name: Array, 
// 	comments: Array, 
// 	email: Array, 
// 	password: Array, 
// 	date_joined: Array, 
// 	age: 
// })

const Post = mongoose.model('Post', postSchema)








