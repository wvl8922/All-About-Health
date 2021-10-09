'use strict'

// DOM -> Document Object Model

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerbutton = document.querySelector("#button");

registerbutton.addEventListener("click", register);

function register(){
    if(!id.value) {
        return alert("아이디를 입력해주십시오.");
    }
    if(password.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
        };  
        console.log(req, JSON.stringify(req));
        console.log(JSON.stringify(req));
    fetch("/register", {
        method: "POST",
        headers: { //내가 보내는 데이터의 형태 명시
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href="/login";
        } else{
            alert(res.msg)
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });

};