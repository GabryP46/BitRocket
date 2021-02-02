fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    var str = '<ul>';
    posts.forEach(post =>  str += '<li>'+ post.title + '</li>' + '</br>' + '<li>'+ post.body + '</li>' + '</br>' + '<hr />' + '</br></br>');
    str += '</ul>';
    document.getElementById("slideContainer").innerHTML = str;
})


