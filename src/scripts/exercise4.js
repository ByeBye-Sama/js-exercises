"use strict";

function getInfo() {

    let arrayElement = []

    let sendButton = document.querySelector(".js_sendButton");
    sendButton.addEventListener("click", function (e) {
        e.preventDefault();
        let htmlTag = document.querySelector(".js_htmlTag").value
        let newHtml = document.createElement(htmlTag);
        let textInside = document.querySelector(".js_textInside").value;
        let text = document.createTextNode(textInside);
        let classInside = document.querySelector(".js_classInside").value;
        newHtml.setAttribute("class", classInside);
        let styleInside = document.querySelector(".js_styleInside").value;
        newHtml.setAttribute("style", styleInside);
        let insideTag = document.querySelector(".js_selectElement").value;

        newHtml.appendChild(text);
        document.querySelector(`.${insideTag}`).appendChild(newHtml); /* here change body */

        let typeElement = document.createElement("option");
        typeElement.setAttribute("value", classInside);
        let textElement = document.createTextNode(classInside);
        typeElement.appendChild(textElement);
        document.querySelector(".js_selectElement").appendChild(typeElement);

    });
}

getInfo();

