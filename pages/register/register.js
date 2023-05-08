const registerForm = document.getElementById("register-form");

function handleRegister() {
    console.log("ffdas");

    const username = registerForm.querySelector('input[id="username"]').value;
    const email = registerForm.querySelector('input[id="email"]').value;
    const password = registerForm.querySelector('input[id="password"]').value;
    const confirmPassword = registerForm.querySelector(
        'input[id="confirm-password"]'
    ).value;
    // sex output
    let sex = '';
    if(document.getElementById('m').checked) {
        //Male radio button is checked
        sex = 'm';
      }else if(document.getElementById('f').checked) {
        //Female radio button is checked
        sex = 'f';
    }else if(document.getElementById('o').checked) {
        //Female radio button is checked
        sex = 'o';
    }

    if (username.length < 5)
        return alert("Username should be at least 5 characters long!");
    if (email === "") return alert("Email field is required!");
    if (password.length < 5)
        return alert("Password should be at least 5 characters long!");
    if (password !== confirmPassword) return alert("Passwords do not match!");

    atIndex = email.indexOf("@");
    dotIndex = email.indexOf(".");
    if (atIndex === -1 || dotIndex === -1 || dotIndex < atIndex) {
        return alert("Invalid email format!");
    }
    if (sex === ''){
        return alert("Must select a gender!");
    }
// // de aici in jos
//     var isValid = true;

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var data = JSON.parse(this.responseText);

//             // var validat;
//             if (isValid) {
//                 // Create a new XHR object
//                 var xhr = new XMLHttpRequest();

//                 // Set up the request
//                 xhr.open("POST", "register.php", true);
//                 xhr.setRequestHeader(
//                     "Content-type",
//                     "application/x-www-form-urlencoded"
//                 );

//                 // Set up a callback function for when the request is complete
//                 xhr.onload = function () {
//                     if (xhr.status === 200) {
//                         // Handle the response from the server
//                         console.log(xhr.responseText);
//                     } else {
//                         console.log("Error: " + xhr.status);
//                     }
//                 };

//                 var data =
//                         "sex=" +
//                         encodeURIComponent(sex) +
//                         "&username=" +
//                         encodeURIComponent(username) +
//                         "&email=" +
//                         encodeURIComponent(email) +
//                         "&password_hash=" +
//                         encodeURIComponent(password);
                        
//                 console.log(data);

//                 xhr.send(data);
//             } else {
//                 alert(validationError);
//             }
//         }
//     };
    // console.log("yes")

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("yes again")
            console.log(this.responseText)
            window.location.href = "/index.html";
        }
    };

    xhttp.open("POST", "register.php", true);
    xhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );

    var data =
        "sex=" +
        encodeURIComponent(sex) +
        "&username=" +
        encodeURIComponent(username) +
        "&email=" +
        encodeURIComponent(email) +
        "&password_hash=" +
        encodeURIComponent(password);
    console.log(data);
    
    xhttp.send(data);
    
}
