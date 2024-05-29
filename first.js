document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
    const clearButton = document.getElementById('clear-comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const commentText = commentInput.value.trim();
        if (commentText === "") {
            return;
        }

        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);

        commentInput.value = '';
    });

    clearButton.addEventListener('click', function() {
        commentsList.innerHTML = '';
    });
});







