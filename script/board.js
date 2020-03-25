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
        }]
};

var boardPostuser = document.querySelector(".boardPostuser");
boardPostuser.innerText = boardmockData.posts[0].user;

var boardPostContent = document.querySelector(".boardPostContent");
boardPostContent.innerText = boardmockData.posts[0].content;

var boardPostTimestamp = document.querySelector(".boardPostTimestamp");
boardPostTimestamp.innerText = boardmockData.posts[0].timestamp;

///////////////////////comment
var boardCommentTime = document.querySelector(".boardCommentTime");
boardCommentTime.innerText = boardmockData.posts[0].comment[0].timestamp;

var boardCommentContent = document.querySelector(".boardCommentContent");
boardCommentContent.innerText = boardmockData.posts[0].comment[0].content;
//////////////////////////reply
var boardReplyTime = document.querySelector(".boardReplyTime");
boardReplyTime.innerText = boardmockData.posts[0].comment[0].reply[0].timestamp;

var boardReplyContent = document.querySelector(".boardReplyContent");
boardReplyContent.innerText = boardmockData.posts[0].comment[0].reply[0].content;

// posts [posts]
// - user
// - id（post id）
// - content
// - timestamp ("2020-03-25T12:42:38.000000Z")
// - likeC [userObj] (有哪些人喜歡這些文章)
// - likes [userObj]  (目前登入的使用者有沒有喜歡這篇文章, 沒有的話count()是0)
// - comment [posts]
//     - user
//     - id（post id）
//     - content
//     - timestamp
//     - reply [posts]
//         - user
//         - id（post id）
//         - content
//         - timestamp