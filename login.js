(function() {
    const form = document.getElementById('login-form');
    const emailInput = form.email;
    const passwordInput = form.password;
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    function validateEmail(email) {
        // Basic email regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Clear previous errors
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validate email
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Validate password (simple length check)
        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Password is required.';
            valid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            // For demo: show alert and reset form
            alert('Login successful! (Demo)');
            form.reset();
        }
    });
})();
