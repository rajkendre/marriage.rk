// Login
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("login_email").value;
    let pass = document.getElementById("login_password").value;

    if(email === "" || pass === ""){
        alert("Enter login details");
        return;
    }

    // Login success
    window.location.href = "dashboard.html";
});


// Signup
document.getElementById("signupForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Account created successfully! Please login.");
    window.location.href = "login.html";
});
