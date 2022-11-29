var count = localStorage.length;
var comments = {};
function createReplyBox(replyCount, replyButton, dynamicCommentBox){
    parent = replyButton.parentNode

    if (replyCount == 0 ){
    var dynamicReplyBox = document.createElement('textarea');
    dynamicReplyBox.style.display = "block";
    dynamicReplyBox.setAttribute('class', 'replybox');
    parent.insertBefore(dynamicReplyBox, replyButton);
    }

    if (replyCount != 0 ){
        var sib = replyButton.previousSibling;
        var replyText = replyButton.previousSibling.value;
        var dynamicReply = document.createElement('div');
        dynamicReply.style.display = "block";
        dynamicReply.innerHTML = replyText;
        parent.insertBefore(dynamicReply, sib);
        sib.value = '';
    }
}

function createCommentBox(commentBoxText, count){
    if (commentBoxText == ''){
        alert('Please write your comment');
        return null;
    }

    if (commentBoxText.trim() == ''){
        alert('Please write your comment');
        return null;
    }

    var dynamicCommentBox = document.createElement('div');
    dynamicCommentBox.style.display = "block";

    var comment = document.createElement('div');
    comment.innerHTML = commentBoxText;
    comment.setAttribute('class', 'comment');
    dynamicCommentBox.appendChild(comment);
    comment.style.wordBreak = 'break-word';
    comment.style.display = 'flex';
    comment.style.alignItems = 'center';
    comment.style.justifyContent = 'center';
    comment.style.borderBottom = '1px solid #8B4513';
    comment.style.marginTop = '10px';
    comment.style.padding = '10px';
    

    var mainComment = document.querySelector('.main__comment');
    mainComment.appendChild(dynamicCommentBox);

    var date = new Date();
    var date = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    var dateComment = document.createElement('div');
    dateComment.innerHTML = date;
    dynamicCommentBox.appendChild(dateComment);
    dateComment.style.display = 'flex';
    dateComment.style.justifyContent = 'center';

    var userName = document.createElement('div');
    userName.innerHTML = 'Anonymous';
    dynamicCommentBox.appendChild(userName);
    userName.style.display = 'flex';
    userName.style.justifyContent = 'center';

    var space = document.createElement('div');
    space.innerHTML = ' ';
    space.style.marginBottom = '10px';
    dynamicCommentBox.appendChild(space);    

    localStorage.setItem(count, commentBoxText);
}


function getValue(){
    var commentBoxText = document.getElementById('textarea').value;
    
    comments.comment = commentBoxText;
    count++;
    comments.id = localStorage.length + 1;
    document.getElementById('textarea').value = '';

    createCommentBox(commentBoxText,count);
}
function showComments(){
    var mainComment = document.querySelector('.main__comment');
    for (var i = 0; i < localStorage.length; i++){
        var dynamicCommentBox = document.createElement('div');
        dynamicCommentBox.style.display = "block";

        var comment = document.createElement('div');
        comment.innerHTML = localStorage.getItem(i+1);
        comment.setAttribute('class', 'comment');
        dynamicCommentBox.appendChild(comment);
        comment.style.wordBreak = 'break-word';
        comment.style.display = 'flex';
        comment.style.alignItems = 'center';
        comment.style.justifyContent = 'center';
        comment.style.borderBottom = '1px solid #8B4513';
        comment.style.marginTop = '10px';
        comment.style.padding = '10px';

        mainComment.appendChild(dynamicCommentBox);

        var date = new Date();
        var date = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        var dateComment = document.createElement('div');
        dateComment.innerHTML = date;   
        dynamicCommentBox.appendChild(dateComment);
        dateComment.style.display = 'flex';
        dateComment.style.justifyContent = 'center';

        var userName = document.createElement('div');
        userName.innerHTML = 'Anonymous';
        dynamicCommentBox.appendChild(userName);
        userName.style.display = 'flex';
        userName.style.justifyContent = 'center';

        var space = document.createElement('div');
        space.innerHTML = ' ';
        space.style.marginBottom = '10px';
        dynamicCommentBox.appendChild(space);
    }
}

function loadPage(){
    showComments();
    localStorage.clear();
}

window.addEventListener('load', loadPage);