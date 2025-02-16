document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form");

    if (!loginForm) {
        console.error("❌ Form not found! Make sure it exists in the HTML.");
        return;
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = loginForm.querySelector('input[type="email"]').value.trim();
        let password = loginForm.querySelector('input[type="password"]').value.trim();

        if (!email || !password) {
            alert("Please enter your email and password!");
            return;
        }

        let userData = localStorage.getItem(email);

        if (!userData) {
            alert("This email is not registered! Please sign up first.");
            return;
        }

        userData = JSON.parse(userData);

        if (userData.password !== password) {
            alert("Incorrect password!");
            return;
        }

        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");

        setTimeout(() => {
            window.location.href = "index.html"; // Slight delay before redirecting
        }, 1000);
    });
});
