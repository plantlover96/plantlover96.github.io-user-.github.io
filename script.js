// script.js
document.body.style.backgroundColor = "black";
document.body.innerHTML = `
<h1 id='header'>Escape Room</h1>
<form id="loginForm">
  <input type="password" id="password" placeholder="Password">
  <button id="loginButton">Login</button>
</form>`;
document.getElementById("loginButton").addEventListener("click", function() {
  var password = document.getElementById("password").value;
  if (password === "502") {
    document.body.style.backgroundColor = "green";
    document.body.innerHTML = "<h1>Accepted</h1>";
  } else {
    var audio = new Audio('Emotional Damage.mp3');
    audio.play()
    document.body.style.backgroundColor = "red";
    document.body.innerHTML = "<h1>Denied</h1>";
    setTimeout(function() {
      document.body.style.backgroundColor = "black";
      document.body.innerHTML = `
      <h1 id='header'>Escape Room</h1>
      <form id="loginForm">
        <input type="password" id="password" placeholder="Password">
        <button id="loginButton">Login</button>
      </form>`;
    }, 3000);
  }
});
