// user-service.js

function registerUser(username, password, email) {
  if (!username || !password || !email) {
    alert("Please fill in all fields.")
    return
  }

  const existingUsers = JSON.parse(localStorage.getItem("users")) || []

  if (existingUsers.find(user => user.username === username)) {
    alert("Username already taken.")
    return
  }

  existingUsers.push({ username, password, email })
  localStorage.setItem("users", JSON.stringify(existingUsers))

  alert("Registration successful! Please log in.")
  window.location.href = "login.html"
}

function loginUser(username, password) {
  if (!username || !password) {
    alert("Please enter username and password.")
    return
  }

  const existingUsers = JSON.parse(localStorage.getItem("users")) || []
  const user = existingUsers.find(user => user.username === username && user.password === password)

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user))
    window.location.href = "index.html"
  } else {
    alert("Invalid username or password.")
  }
}

function checkLoginStatus() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"))
  if (!user) {
    window.location.href = "login.html"
  }
}

document.getElementById("registerForm")?.addEventListener("submit", function (event) {
  event.preventDefault()
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const email = document.getElementById("email").value
  registerUser(username, password, email)
})

document.getElementById("loginForm")?.addEventListener("submit", function (event) {
  event.preventDefault()
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  loginUser(username, password)
})

if (window.location.pathname.endsWith("index.html")) {
  document.addEventListener("DOMContentLoaded", checkLoginStatus)
}
