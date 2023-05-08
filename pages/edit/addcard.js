const cardForm = document.getElementById("card-form");

function handleAddCard() {
    console.log("connected");
    const front = cardForm.querySelector('input[id="front"]').value;
    const back = cardForm.querySelector('input[id="back"]').value;

    if (front === "" || back === "")
        return alert("front and back fields are required!");

    // Create a new XHR object
    var xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open("POST", "addcard.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Set up a callback function for when the request is complete
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Handle the response from the server
            console.log(xhr.responseText);
        } else {
            console.log("Error: " + xhr.status);
        }
    };

    var data =
        "front=" +
        encodeURIComponent(front) +
        "&back=" +
        encodeURIComponent(back);
    //
    console.log(data);
    xhr.send(data);
    //     }
    // };

    // xhttp.open("GET", "getdata.php", true);
    // xhttp.send();
}
