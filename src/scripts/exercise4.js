"use strict";

function getInfo() {
    let textInside = ''

    let sendButton = document.querySelector(".js_sendButton");
    sendButton.addEventListener("click", function (e) {
        e.preventDefault();
        textInside = document.querySelector(".js_textInside").value;

        let newText = `<p> ${textInside} </p>`;
        document.querySelector('.js_newContent').innerHTML = newText;
        textInside = '';

    });
}

getInfo();