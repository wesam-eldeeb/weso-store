document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("You must log in first!");
        window.location.href = "login.html";
        return;
    }

    let userData = localStorage.getItem(loggedInUser);

    if (!userData) {
        console.error("Invalid user data. Logging out...");
        localStorage.removeItem("loggedInUser"); // Remove invalid user
        window.location.href = "login.html";
        return;
    }

    // Parse user data only if it exists
    userData = JSON.parse(userData);
});
