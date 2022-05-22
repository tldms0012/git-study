const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"; // 반복되는 String
const USERNAME_KEY = "username"; // 관습: String만 포함된 변수는 대문자로 표기

const link = document.querySelector("a");

function onLoginSubmit(event){ // -> evnet object를 argument로 줌
    event.preventDefault() // ~.preventDefault() -> submit 막음 = 기본 동작 막는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username) // localStorage 작은 db같은 API
    //greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`; // 규칙1. ${변수명}, 규칙2. ``(백틱)   
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

// function handleLink(event){
//     event.preventDefault()
//     console.log(event);
//     alert("click");
// }

loginForm.addEventListener("submit", onLoginSubmit);
// function명() 해서 호출하면 즉시 실행한다는 뜻 => onLoginSubmit()
// 그래서 addEventListener 실행할 때 function 이름만 적음
// 위 함수에서 event는 event 정보를 받겠다. 비어있으면 안받는거

// link.addEventListener("click", handleLink);

function paintGreetings(username){
    //const username = localStorage.getItem(USERNAME_KEY); local storage 두 번 열 필요 없으니까 변수 주석
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) { 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}



