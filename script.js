document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation check
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect or proceed with the next steps here
    } else {
        alert("Invalid username or password.");
    }
});
