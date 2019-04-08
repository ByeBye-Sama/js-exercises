"use strict";

function getInfo() {
    let user = {
        name: '',
        lastname: '',
        age: '',
        gender: '',
        favoriteFood: [],
        country: ''
    }

    let sendButton = document.querySelector(".js_sendButton");
    sendButton.addEventListener("click", function (e) {
        e.preventDefault();
        user.name = document.querySelector(".js_name").value;
        user.lastname = document.querySelector(".js_lastname").value;
        user.age = document.querySelector(".js_age").value;
        /* alert("some"); */
        let newText = `
        <div class="d-flex flex-row bd-highlight mt-2">
            <p> Your name is: ${user.name} </p>
        </div>
        <div class="d-flex flex-row bd-highlight mt-2">
        <p> Your lastname is: ${user.lastname} </p>
        </div>
        <div class="d-flex flex-row bd-highlight mt-2">
        <p> Your age is: ${user.age} </p>
        </div>`;
        document.querySelector('.js_newContent').innerHTML = newText;
        user.name = "";
        user.lastname = "";
        user.age = "";
    });
}

getInfo();