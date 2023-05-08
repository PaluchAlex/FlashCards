// learn page

$('#notebook-btn').on("click", function () {
    $('#back-content').toggleClass("transparent");
})
let cards = [];
let cardIndex = 0;

function loadData() {
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
        
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        cards = data;
        console.log(data);
        updateCard();
      }
    };
  
    xhttp.open("GET", "getcards.php", true);
    xhttp.send();
}
  
function updateCard() {
    currentCard = cards[cardIndex];
    front = currentCard.front;
    back = currentCard.back;

    // make sure back is not visible
    $('#back-content').addClass("transparent");

    document.getElementById('front-content').innerHTML = front;
    document.getElementById('back-content').innerHTML = back; 

    console.log(cardIndex);
    cardIndex++;
    if(cardIndex > cards.length - 1){
        // reset card count
        console.log("looping")
        cardIndex = 0;
    }
}

function disableBtn() {
    
    const editBtn = document.querySelector(".edit-btn");
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

disableBtn();
loadData();
