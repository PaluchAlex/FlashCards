console.log("connected succesfully!")

// lista de carti [[fata, spate], [fata, spate]]
let cards_list = [];

const form =  document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const fd = new FormData(form);
    let form_info = [];
    for (item of fd){
        form_info.push(item[1]);

    }
    cards_list.push(form_info); 
    console.log(cards_list);
})

