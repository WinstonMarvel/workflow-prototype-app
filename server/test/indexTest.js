let assert = require('chai').assert;
let testPost = {
	postId: 2,
	createdDate: new Date(),
	userId: 2,
	plagiarism: {
		copyscape: true, 
		uniqueness: true,
		total: 2
	}, 
	spellcheck: {
		basic: true,
		vendorInfo: true,
		wordUsage: true, 
		grammar: true,
		total: 2
	},
	writingProficiency: {
		pov: true,
		grammar: true,
		readability: true,
		total: 2
	},
	topic: {
		appropriateness: 2,
		date: true,
		total: 2
	},
	tone: true,
	focus: {
	   topic: 2,
	   headline: 2,
	   adverseness: true,
	   clientGoals: true,
	   headers: 2,
	   total: 2
	},
	source: true,
	performance: {
		linkText: 2,
		linkMatchesHeaders: 2,
		total: 2
	},
	compliance:{
		words: true,
		noMisleadingImpressions: true,
		noFactualInaccuracies: true,
		total: 2
	},
	total: true,
	score: 2,
	status: true
};

let testPost2 = {
	plagiarism: {
		copyscape: true, 
		uniqueness: false,
		total: 1
	}
};
let fetch = require('node-fetch');
let id;

describe('Posts', function () {
	it('Should create a post', async () => {
		var url = 'http://localhost:8080/posts/';
		var options = {
			method: 'post',  
			body: 
				JSON.stringify({post: testPost})
			,
			headers: { 'Content-Type': 'application/json' }
		};  
		var res = await fetch(url, options); 
		var body = await res.json(); 
		id = body.id;
	});   

	it('Should delete a post', async () =>{ 
		var url = 'http://localhost:8080/post/2';
		var options = {
			method: 'delete', 
			body: 
				JSON.stringify({postId: id})
			,
			headers: { 'Content-Type': 'application/json' }
		};  
		var res = await fetch(url, options); 
		var body = await res.json(); 
		id = body.id;
	});
 
	it('Should update a post', async () =>{
		var url = 'http://localhost:8080/post/1';
		var options = {
			method: 'put', 
			body: 
				JSON.stringify({post: testPost2})
			,
			headers: { 'Content-Type': 'application/json' }
		};  
		var res = await fetch(url, options); 
		var body = await res.json(); 
		id = body.id; 
	});   
});  