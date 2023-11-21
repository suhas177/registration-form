function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;

    if (name === "" || email === "" || username === "" || password === "" || phone === "") {
        alert("All fields must be filled out");
    }

    else {
        // Email format validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return;
        }

        // Password strength requirements
        // At least 8 characters, one uppercase letter, one lowercase letter, and one digit
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit");
            return;
        }

        // Phone number format validation
        var phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number; adjust as needed
        if (!phoneRegex.test(phone)) {
            alert("Invalid phone number format");
            return;
        }


        alert("Registration successful! Redirecting to confirmation page.");
        // You can redirect to a confirmation page or handle form submission here
        window.location.href = "confirmation.html"
    }
}
