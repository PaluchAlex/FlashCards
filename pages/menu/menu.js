
// if(email.toString().includes("admin")){
//     window.localStorage.setItem("isAdmin", true);
//   } else {
//     window.localStorage.setItem("isAdmin", false);
//   }

function main() {
    
    const editBtn = document.getElementById("edit-btn");
    const isAdmin = window.localStorage.getItem("isAdmin");
    console.log(window.localStorage.getItem("isAdmin"));
    // $("#edit-btn").prop("disabled", (!window.localStorage.getItem("isAdmin")));
    if(isAdmin == "true"){
        console.log("user is admin!");
        // $("#edit-btn").prop("disabled", false);
        editBtn.disabled = false;
    } else {
        console.log("user is not admin!");
        editBtn.disabled = true;
        // $("#edit-btn").prop("disabled", true);
        
    }
    
    // return alert(window.localStorage.getItem("isAdmin"));
}

main();