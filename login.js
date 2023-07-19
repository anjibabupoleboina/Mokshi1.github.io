function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "style.css", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("username=" + username + "&password=" + password);
    xhr.onload = function() {
      if (xhr.status == 200) {
        window.location.href = "home.php";
      } else {
        alert("Login failed.");
      }
    };
  }
  