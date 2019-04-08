"use strict";

let arrayText = []

function printValues() {

    let insertText = document.querySelector(".js_element")

    let sendButton = document.querySelector(".js_sendButton")
    sendButton.addEventListener("click", function (e) {
        e.preventDefault();
        let newText = `
        <div class="d-flex flex-row bd-highlight mb-3">
            <p style="padding-right:20px"> ${insertText.value} </p>
            <button type="button" class="btn btn-outline-warning">Edit</button>
            <button type="button" class="btn btn-outline-success">Save</button>
            <button type="button" class="btn btn-outline-danger js_delete">Delete</button>
        </div>`;
        arrayText.push(newText);
        document.querySelector('#arrayList').innerHTML = arrayText.join();
        insertText.value = "";
        deleteValue();
    });   
}

function deleteValue() {
    let deleteText = document.querySelectorAll(".js_delete")

    deleteText.forEach((textElements, i) => {
        textElements.addEventListener("click", function (e) {
            e.preventDefault();
            console.log("sosmething");
            arrayText.splice(i, 1);
      
        })

    });
}

printValues();
