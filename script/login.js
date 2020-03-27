var login = document.querySelector(".btn-primary");
login.onclick = function () {
    var usrname = document.getElementsByName("name")[0].value;
    var password = document.getElementsByName("password")[0].value;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    // myHeaders.append("Authorization", "Bearer a73ce214dad75ea5f17ad30d3322d564e1cbb6dc366f653aebb9b033c377b9d3");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "name": usrname, "password": password });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://vegelephant.club/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            document.cookie = `cookie= ${result.msg}`;
            window.location.href = "./index.html"//跳轉頁面
        }
        )


        .catch(error => console.log('error', error));


}//function


// document.cookie = `cookie= ${result.now_user.api_token}`;


// myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjBKY1FWWHQ5QWhJM1hjdXJ3d0R0a0E9PSIsInZhbHVlIjoiOGZMb2NXSDVBQlBud3g4ZkNlckZvVGx2Z24ybDNhYnpEeVplMDlndFd2bnRkQjRiVnkwQ1NtcmJ4WHZPUzVadyIsIm1hYyI6IjI3ZWJiMDMyMjdjNjMyMzM2YTlkOTI2YWQ0MTQ1YjA0YjZjNTU2ZjkxOGQ1NDEzMDZlYTRlMmQyNDVkMGRmZDAifQ%3D%3D; laravel_session=eyJpdiI6InZHcjZzcXR5MC92cXhBaU8zRDhzUEE9PSIsInZhbHVlIjoiM1VFdlB4V1dod05wOWRTelJGNGZFcWRwQTdEY2w4cGRJcmFMblcwZ2JaN0lvRGdFZGFVZW41VzZadCtBczdUNyIsIm1hYyI6ImJlOWY2MmQ3Nzk1NTFmNDFkOTIxNmY3MzBlMWY2YmQzMjI0ZTc3NzY4MmY0ZmMwZmNhYTVjZmQ2NTUxOGU0OWYifQ%3D%3D");








