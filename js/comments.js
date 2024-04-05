function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}

function displayComment(comments){
    const commentsDiv = document.getElementById('comments-container');

    for(let comment of comments){
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
        <h4>Post ID: ${comment.postId}</h4> 
        <h3>Name: ${comment.name}</h3>
        <p>Comments: ${comment.body}</p>
        `;
        commentsDiv.appendChild(commentDiv);
    }
}

loadComments();