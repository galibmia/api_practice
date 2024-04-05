function loadBlogs(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayBlog(data))
}

function displayBlog(posts){
    const blogContainer = document.getElementById('blogs-container');
    for(let post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>Post : ${post.id} </h4>
            <h3>Title: ${post.title} </h3>
            <p> Description: ${post.body} </p>
        `;
        blogContainer.appendChild(postDiv);

    }
}

loadBlogs();