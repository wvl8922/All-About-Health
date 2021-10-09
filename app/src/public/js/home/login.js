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
        console.log(req, JSON.stringify(req));
        console.log(JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers: { //내가 보내는 데이터의 형태 명시
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    // .then((res)=>console.log(res));
    .then(console.log)
};