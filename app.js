console.log("connected succesfully!")

// // lista de carti [[fata, spate], [fata, spate]]
// let cards_list = [];

// const form =  document.querySelector("form");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const fd = new FormData(form);
//     let form_info = [];
//     for (item of fd){
//         form_info.push(item[1]);

//     }
//     cards_list.push(form_info); 
//     console.log(cards_list);
// })

const loginForm = document.getElementById("login-form");

let users = [];

function handleLogin() {
  const email = loginForm.querySelector('input[id="email"]').value;
  const password = loginForm.querySelector('input[id="password"]').value;

  if(email.includes("admin")){
    window.localStorage.setItem("isAdmin", true);
  } else {
    window.localStorage.setItem("isAdmin", false);
  }

  if (email === "") return alert("Email field is required!");
  if (password === "") return alert("Password field is required!");

  atIndex = email.indexOf("@");
  dotIndex = email.indexOf(".");
  if (atIndex === -1 || dotIndex === -1 || dotIndex < atIndex) {
    return alert("Invalid email format!");
  }

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      

      var isLoggedIn = false;

      for (var i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password_hash === password) {
          window.localStorage.setItem("connectedUserId", data[i].id.toString());
            window.location.href = "/pages/menu/menu.html";
          isLoggedIn = true;
        }
      }

      if (!isLoggedIn) {
        alert("Incorrect email or password!");
      }
    }
  };

  xhttp.open("GET", "getdata.php", true);
  xhttp.send();
}


function loadData() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      users = data;
      console.log(data);
    }
  };

  xhttp.open("GET", "getdata.php", true);
  xhttp.send();
}


