'use strict'

// DOM -> Docum\ent Object Model

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginbutton = document.querySelector("button");

loginbutton.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        password : password.value,
        };
    console.log(req);
};