const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Create Data
const data = {
  title: 'Post One',
  post: 'This is the post'
}

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data,  function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/2', data,  function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Delete Posts
http.delete('https://jsonplaceholder.typicode.com/posts/4', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});