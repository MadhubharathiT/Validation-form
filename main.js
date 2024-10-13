// function validateForm()
// {
//     clearMessage();
//     leterrorFlag=false;
// }
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let valid = true;

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        // Validate Name
        const name = document.getElementById('name').value;
        if (!name) {
            document.getElementById('nameError').textContent = 'Must enter a name.';
            valid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Validate Contact Number
        const contact = document.getElementById('contact').value;
        const contactPattern = /^\d{10}$/;
        if (!contactPattern.test(contact)) {
            document.getElementById('contactError').textContent = 'Contact number must be exactly 10 digits.';
            valid = false;
        }

        // Validate Message
        const message = document.getElementById('message').value;
        if (!message) {
            document.getElementById('messageError').textContent = 'Please enter a message.';
            valid = false;
        }

        // Validate Password
        const password = document.getElementById('password').value;
        if (password.length < 8) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
            valid = false;
        }

        // If all validations pass
        if (valid) {
            alert('Form submitted successfully!');
            // You can submit the form or do any further processing here
        }
    });
