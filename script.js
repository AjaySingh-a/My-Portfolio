// Responsive navigation toggle
const navMenu = document.querySelector('nav ul');
const navToggle = document.querySelector('.fas.fa-bars');

navToggle.addEventListener('click', () => {
    navMenu.style.right = navMenu.style.right === '0px' ? '-200px' : '0px';
});

// Tab functionality for About section
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Remove active states
        tabLinks.forEach(link => link.classList.remove('active-link'));
        tabContents.forEach(content => content.classList.remove('active-tab'));

        // Add active state to clicked tab
        link.classList.add('active-link');
        tabContents[index].classList.add('active-tab');
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Display a loading message
    formStatus.textContent = 'Sending your message...';
    formStatus.classList.remove('error');
    formStatus.style.display = 'block';

    const formData = new FormData(contactForm);

    try {
        // Simulate form submission (replace URL with your backend API endpoint)
        await fetch('https://example.com/send-message', {
            method: 'POST',
            body: formData,
        });

        // Display success message
        formStatus.textContent = 'Your message has been sent successfully!';
        contactForm.reset(); // Clear the form
    } catch (error) {
        // Display error message
        formStatus.textContent = 'An error occurred. Please try again.';
        formStatus.classList.add('error');
    }
});
