"use strict";

function printValues() {
    let arrayText = []
    let insertText = document.body.querySelector(".js_element")

    let sendButton = document.body.querySelector(".js_sendButton")
    sendButton.addEventListener("click", function (e) {
        e.preventDefault;
        let newText = `
        <div class="d-flex flex-row bd-highlight mb-3">
            <p style="padding-right:20px"> ${insertText.value} </p>
            <button type="button" class="btn btn-outline-warning">Edit</button>
            <button type="button" class="btn btn-outline-success">Save</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
        </div>`;
        arrayText.push(newText);
        document.querySelector('#arrayList').innerHTML = arrayText.join();
    });
}



printValues();