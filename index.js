
const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");

const registeredUsers = {};

if(registrationForm != null){
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("regUsername").value;
        const password = document.getElementById("regPassword").value;
    
        if (registeredUsers.hasOwnProperty(username)) {
            alert("Username already exists. Please choose a different username.");
        } else {
            registeredUsers[username] = password;
            alert(`Registration successful!\nUsername: ${username}\nPassword: ${password}`);
            window.location.href = "inde.html";
        }
    });
}

if(loginForm != null){
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
    
        console.log(username)
    
        if (registeredUsers.hasOwnProperty(username) && registeredUsers[username] === password) {
            alert(`Login successful!\nWelcome, ${username}!`);
            window.location.href = "home.html";
        } else {
            alert("Login failed. Please check your username and password.");
        }
    })
}
