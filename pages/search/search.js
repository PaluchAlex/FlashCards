var cards = [];

var xhttp = new XMLHttpRequest();

function loadCardDataOnPage() {
  const resultsContainer = document.querySelector(".results-container");
  resultsContainer.innerHTML = ""; // clear previous results

  cards.forEach((card) => {
    // create new post div
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    // add image
    const front = document.createElement("h2");
    front.textContent = card.front;
    postDiv.appendChild(front);

    // add title
    const back = document.createElement("h2");
    back.classList.add("posts-title");
    back.textContent = card.back;
    postDiv.appendChild(back);

    // append post div to results container
    resultsContainer.appendChild(postDiv);
  });
}

// FILTERING
$("#search").on("input", function () {
  const val = $(this).val().toUpperCase();
  $(".post").each(function () {
    if ($(this).html().toUpperCase().indexOf(val) !== -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

function loadData() {
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
        
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        cards = data;

        console.log(data);
        loadCardDataOnPage();
      }
    };
  
    xhttp.open("GET", "../learn/getcards.php", true);
    xhttp.send();
}
loadData();