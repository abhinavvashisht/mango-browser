// renderer.js

// Add any additional code or functionality for your Electron app here

// Example: Display a message when the page is loaded
window.addEventListener('DOMContentLoaded', () => {
    const message = document.createElement('p');
    message.textContent = 'Hello, Electron!';
    document.body.appendChild(message);
});