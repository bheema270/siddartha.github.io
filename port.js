function toggleMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

function likePost() {
    let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
    localStorage.setItem('likeCount', likeCount);
}

function addComment() {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        comments.push(commentText);
        displayComments();
        commentInput.value = ''; // Clear the input field
        localStorage.setItem('comments', JSON.stringify(comments));
    }
}

function displayComments() {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    comments.forEach(comment => {
        const li = document.createElement('li');
        li.innerText = comment;
        commentList.appendChild(li);
    });
}

function clearAll() {
    localStorage.removeItem('likeCount');
    localStorage.removeItem('comments');
    document.getElementById('likeCount').innerText = '0';
    displayComments();
}
