"use strict";

function getInfo() {

    let arrayElement = []

    let sendButton = document.querySelector(".js_sendButton");
    sendButton.addEventListener("click", function (e) {
        e.preventDefault();
        /*get value & create html */
        let htmlTag = document.querySelector(".js_htmlTag").value
        let newHtml = document.createElement(htmlTag);
        /*get value & write a text*/
        let textInside = document.querySelector(".js_textInside").value;
        let text = document.createTextNode(textInside);
        /*get value & set a class */
        let classInside = document.querySelector(".js_classInside").value;
        newHtml.setAttribute("class", classInside);
        /*get value & set a style */
        let styleInside = document.querySelector(".js_styleInside").value;
        newHtml.setAttribute("style", styleInside);

        /*insert the text and html inside selected class */
        let insideTag = document.querySelector(".js_selectElement").value;
        newHtml.appendChild(text);
        document.querySelector(`.${insideTag}`).appendChild(newHtml);

        /*add class to selector as an option*/
        let typeElement = document.createElement("option");

        if (classInside !== insideTag) {
            typeElement.setAttribute("value", classInside);
            let textElement = document.createTextNode(classInside);
            typeElement.appendChild(textElement);
            document.querySelector(".js_selectElement").appendChild(typeElement);
        }


    });
}

getInfo();

