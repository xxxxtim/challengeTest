function fakeData() {
    var boardmockData = {
        posts: [
            {

                user: "apple",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae?",
                timestamp: "2020-03-25T12:42:38.000000Z",
                likec: 9000000,
                likes: ["uuuuu"],

                comment: [{
                    user: "aaa",
                    id: 111,
                    content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purusodio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.Donec,lacinia congue felis in faucibus.",
                    timestamp: "2020-03-25T12:50:38.000000Z",
                    reply: [{
                        user: "dhsuif",
                        id: 9000,
                        content: "mndmfsdnf",
                        timestamp: "2020-03-25T12:55:38.000000Z",
                    }]//reply

                }]//comment
            },//case1
            {
                user: "orange",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae?",
                timestamp: "2020-03-25T12:42:38.000000Z",
                likec: 9000000,
                likes: ["uuuuu"],

                comment: [{
                    user: "bbbbb",
                    id: 111,
                    content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purusodio,vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.Donec,lacinia congue felis in faucibus.",
                    timestamp: "2020-03-25T12:50:38.000000Z",
                    reply: [{
                        user: "dhsuif",
                        id: 9000,
                        content: "mndmfsdnf",
                        timestamp: "2020-03-25T12:55:38.000000Z",
                    }]//reply

                }]//comment

            }//case2


        ]
    };
    return boardmockData;
}//function

// var login = document.querySelector(".btn-primary");
async function boardTakeData() {
    // var usrname = document.getElementsByName("name")[0].value;
    // var password = document.getElementsByName("password")[0].value;
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer 05c628872cdebbc0a8b4f08e84a80ec89185a12af37d7ea1e59b0cd47531bdd4");
    myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({ "name": usrname, "password": password });
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // body: raw,
        redirect: 'follow'
    };

    // fetch("http://vegelephant.club/api/board", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log(result);
    //         return result;
    //         // document.cookie = `cookie= ${result.msg}`;
    //         // window.location.href = "../index.html"//跳轉頁面
    //     }
    //     )
    //     .catch(error => console.log('error', error));

    var response = await fetch("http://vegelephant.club/api/board", requestOptions);
    var result = response.json();
    return result;
}//function


function boardFun() {


}//function

boardTakeData().then(postss => {
    console.log(postss)
    usr(postss);
});

function usr(data) {
    // post-usr
    // let postHtml = [];
    // for (let i = 0; i < data.posts.length; i++) {
    var posts = GetPosts(data);
    var test = document.querySelector(".text-article");
    test.innerHTML = posts;
}//function




function GetPosts(data) {
    return data.posts.map(post => {
        //發文人
        // var postUsr = `<p class="boardPostContent">${post.user.name}</p>`;
        //發文內容
        // var postContent = `<p class="boardPostContent">${post.content}</p>`;
        // var commentss = getComment(post.comments);
        // postHtml.push("<div>" + postUsr + postContent + commentss
        // + "</div>");
        // }//for
        return `
        <div class="container box">
            <section>
                <div class="post">
                    <h1>
                    <a href="##" class="boardPostuser">
                        ${post.user.name}
                    </a>
                    </h1>
                    <p class="boardPostTimestamp">39分鐘</p>
                    <p class="boardPostContent">${post.content}</p>
                </div>
            
                <section class="reaction">
                    <div class="reaction_display">
                    <div class="item" >
                        <i class="far fa-thumbs-up fa-2x"></i>
                        <span class="boardPostTimestamp">450</span>
                    </div>
                    <div class="item boardPostTimestamp" >
                        31則留言
                    </div>
                    </div>
                    <div class="reaction_input">
                    <span class="like"><i class="far fa-thumbs-up fa-2x"></i></span>
                    <span class="like"><i class="far fa-comment-alt fa-2x"></i></span>
                    </div>
                </section>
                <section class="message">
                    <input type="text" class="message_input" placeholder="留言...">        
                    ${getComment(post.comments)}
                </section>
            </section>
        </div>`;
    }).join("");
}

function GetReplys(replies) {
    return replies.map(reply => {
        // var postReplyUsr = `<p class="boardPostContent">${reply.user.name}</p>`;
        // //回覆內容
        // var postReplyContent = `<p class="boardPostContent">${reply.content}</p>`;
        return `
        <div class="media mt-3">
            <a class="mr-3" href="#">
                <img src="../miki.jpg"width="200" height="150" class="mr-3">
            </a>
            <div class="media-body">
                <h4 class="mt-0">${reply.user.name}</h4>
                <p class="boardReplyContent">${reply.content}</p>

                <div class="require">
                    <i class="temp fas fa-comment-dots fa-3x"></i>
                    <div class="time boardReplyTime"></div>
                </div>

            </div>
        </div>`;
        return postReplyUsr + postReplyContent;
    }).join("");
}


function getComment(comments) {
    return comments.map(comment => {
        //留言人
        var postCommentUsr = `<p class="boardPostContent">${comment.user.name}</p>`;
        //留言內容
        var postCommentContent = `<p class="boardPostContent">${comment.content}</p>`
        var Replys = GetReplys(comment.replies);
        return `
        <div class="media">
          <img src="../fuck.jpg"width="200" height="150" class="mr-3"></img>
          <div class="media-body">
            <h3 class="mt-0">${comment.user.name}</h5>
            <p class="boardCommentContent" >
            ${comment.content}
            </p>

            <div class="require">
            <i class="temp fas fa-comment-dots fa-4x"></i>
            <div class="time boardCommentTime"></div>
            </div>
            ${Replys}
        `

        return postCommentUsr + postCommentContent + Replys;
    }).join("");
}//function