document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.remove());

    // Get form values
    const fullName = document.getElementById("Fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");

    let isValid = true;

    // Full Name Validation
    if (fullName.value.trim() === "") {
        showError(fullName, "Full Name is required");
        isValid = false;
    }

    // Email Validation
    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError(email, "Enter a valid email");
        isValid = false;
    }

    // Password Validation
    if (password.value.trim() === "") {
        showError(password, "Password is required");
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    }

    // Confirm Password Validation
    if (confirmPassword.value.trim() === "") {
        showError(confirmPassword, "Please confirm your password");
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Optionally: document.getElementById("myform").submit();
    }
});

// Show error below input
function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.fontSize = '0.9em';
    error.innerText = message;
    input.parentNode.appendChild(error);
}

// Simple email format validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
