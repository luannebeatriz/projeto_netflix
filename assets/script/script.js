function login() {
  let login = document.getElementById("login");
  let password = document.getElementById("password");
  let wrongPass = document.getElementById("wrongemail");

  if (login.value == "luannebps@hotmail.com" && password.value == "12345") {
    window.location.href = "./index2.html";
  } else {
    wrongPass.classList.remove("noaccess");
  }
}
