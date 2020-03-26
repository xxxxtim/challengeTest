var signup = document.querySelector(".btn-success");
// signup.onclick = function () {
function signuplisten(event) {
    var usrname = document.getElementsByName("name")[0].value;
    var password = document.getElementsByName("password")[0].value;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "name": usrname, "password": password });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("http://vegelephant.club/api/register", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            document.cookie = `cookie= ${result.msg}`;
            window.location.href = "../login.html"//跳轉頁面
        }
        )

        .catch(error => console.log('error', error));




}//function
signup.addEventListener("click", signuplisten, false);