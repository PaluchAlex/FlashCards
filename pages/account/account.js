
function updatePage(username, sex, email) {
    let currentSex = document.getElementById('sex')
    document.getElementById('username').innerHTML = username
    document.getElementById('email').innerHTML = email 
    

    if (sex === 'm') {
        currentSex.innerHTML = "Male"
        document.getElementById('avatar-img').src =  "../../images/male.png"
    } else if (sex === 'f') {
        currentSex.innerHTML = "Female"
        document.getElementById('avatar-img').src =  "../../images/female-avatar.png"
    } else if (sex === 'o') {
        currentSex.innerHTML = "Other"
    }
    
    
}

function handleAccount() {
    let id = window.localStorage.getItem("connectedUserId");

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);

            for (var i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    let username = data[i].username
                    
                    let sex = data[i].sex
                    let email = data[i].email
                    updatePage(username,sex,email)
                    //   if (data[i].role === "user") {
                    // window.location.href = "/pages/menu/menu.html";
                    
                }
            }
        }
    };
    xhttp.open("GET", "../../getdata.php", true);
    xhttp.send();
}
handleAccount();

