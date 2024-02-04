document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");
  
    const HIDDEN_CLASSNAME = "hidden";
  
    function onLoginSubmit(event){
      event.preventDefault();
      loginForm.classList.add(HIDDEN_CLASSNAME);
      const username = loginInput.value;
      greeting.innerText = `Hello ${username}`;
      // hidden 클래스를 제거하여 화면에 나타나도록 함
      greeting.classList.remove(HIDDEN_CLASSNAME);
        console.log(greeting);
    }

  
    loginForm.addEventListener("submit", onLoginSubmit);
    // Enter 키 입력 시에도 onLoginSubmit 함수 호출
    loginInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            onLoginSubmit(event);
        }
    });
  
    // 실시간 시계
    function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
    
      const clockElement = document.getElementById('clock');
      clockElement.innerText = `${hours}:${minutes}:${seconds}`;
    }
    
    // 초기화 함수
    function init() {
      updateClock();
    
      // 실시간 시계 갱신 (1초마다)
      setInterval(updateClock, 1000);
    }
    
    // 페이지 로드 시 초기화 함수 호출
    window.onload = init;
  });
  